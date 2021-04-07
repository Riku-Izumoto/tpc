'use strict'

const gulp          = require('gulp')
const pug           = require('gulp-pug')
const sass          = require('gulp-sass')
const minifyCss     = require('gulp-minify-css');
const autoprefixer  = require("gulp-autoprefixer")
const plumber       = require("gulp-plumber")
const notify        = require('gulp-notify')
const rename        = require('gulp-rename');
const error_handler = { errorHandler: notify.onError("Error: <%= error.message %>") }

const webpackStream = require('webpack-stream')
const webpack       = require('webpack')
const webpackConfig = require('./webpack.config')

function html() {
	return gulp.src('./src/pug/*.pug')
		.pipe(plumber(error_handler))
		.pipe(pug({
			pretty: false
		}))
		.pipe(gulp.dest('./public/'))
}

function scss() {
	return gulp.src('./src/scss/style.scss', { sourcemaps: true })
		.pipe(plumber(error_handler))
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer(['last 2 versions', 'ie >= 10', 'Android >= 4', 'iOS >= 8']))
		.pipe(gulp.dest('./public/css/', { sourcemaps: './map/'} ))
		.pipe(minifyCss())
		.pipe(rename({
			suffix: '.min',
		}))
		.pipe(gulp.dest('./public/css/'));
}

function js() {
	return gulp.src('./src/js/*.js')
		.pipe(plumber())
		.pipe(webpackStream(webpackConfig, webpack))
		.pipe(gulp.dest('./public/js/'));
}

function watcher() {
	gulp.watch('./src/pug/**/*.pug', gulp.parallel(html)).on('change', function(event){});
	gulp.watch('./src/scss/**/*.scss', gulp.parallel(scss)).on('change', function(event){});
	gulp.watch('./src/js/*.js', gulp.parallel(js)).on('change', function(event){});
}

exports.default = watcher;
