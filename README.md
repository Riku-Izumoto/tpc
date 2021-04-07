# Static Web Site Template

## Precondition
- Installed git
- created appropriate role Github Account
- configured SSH connection
- already created repository

## Usage
**githubのリポジトリを作成した後に**
```
$ sh setup.sh

// 後は、対話形式で、適当に答えてください。
```


## Setup
```
$ docker-compose up --build -d
$ open http://localhost:3000/
```

## Shutdown
```
$ docker-compose down
```

<br>
<br>
<br>
<br>

- - - -
<br>
<br>

## 各npmパッケージの説明
### autoprefixer
https://qiita.com/umi_kappa/items/7d4552185afdf6106bb3

### browser-sync
https://tech.medpeer.co.jp/entry/2015/06/09/071758

### csscomb-loader
https://qiita.com/k__watanabe/items/e11769427233234fcfaa

### extract-text-webpack-plugin
https://zukucode.com/2017/04/webpack-extracttextplugin-css.html

### globule
https://qiita.com/irico/items/ce741da43e74ac7c1420

### npm-run-all
https://maku77.github.io/nodejs/npm/npm-run-all.html
