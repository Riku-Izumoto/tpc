const toggler = document.querySelector('.menu__toggler');
const menu    = document.querySelector('.menu');
const LinkBtn = document.getElementById('LinkBtn');
const LinkBtn2 = document.getElementById('LinkBtn2');
const LinkBtn3 = document.getElementById('LinkBtn3');
const LinkBtn4 = document.getElementById('LinkBtn4');
const LinkBtn5 = document.getElementById('LinkBtn5');


toggler.addEventListener('click', () => {
  toggler.classList.toggle('active');
  menu.classList.toggle('active');
});

LinkBtn.addEventListener('click', () => {
  if(menu.classList.contains('active')) {
    toggler.classList.remove('active');
    menu.classList.remove('active');
  }
  else{
    toggler.classList.toggle('active');
    menu.classList.toggle('active');
  }
});
LinkBtn2.addEventListener('click', () => {
  if(menu.classList.contains('active')) {
    toggler.classList.remove('active');
    menu.classList.remove('active');
  }
  else{
    toggler.classList.toggle('active');
    menu.classList.toggle('active');
  }
});
LinkBtn3.addEventListener('click', () => {
  if(menu.classList.contains('active')) {
    toggler.classList.remove('active');
    menu.classList.remove('active');
  }
  else{
    toggler.classList.toggle('active');
    menu.classList.toggle('active');
  }
});
LinkBtn4.addEventListener('click', () => {
  if(menu.classList.contains('active')) {
    toggler.classList.remove('active');
    menu.classList.remove('active');
  }
  else{
    toggler.classList.toggle('active');
    menu.classList.toggle('active');
  }
});
LinkBtn5.addEventListener('click', () => {
  if(menu.classList.contains('active')) {
    toggler.classList.remove('active');
    menu.classList.remove('active');
  }
  else{
    toggler.classList.toggle('active');
    menu.classList.toggle('active');
  }
});
