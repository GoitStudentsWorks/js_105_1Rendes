const menuBtn = document.querySelector('.header-menubtn');
const mobMenuBtn = document.querySelector('.header-mob-menubtn');
const headerMenu = document.querySelector('.header-menu');

menuBtn.addEventListener('click', () =>
  headerMenu.classList.toggle('header-hidden')
);
// mobMenuBtn.addEventListener('click', onMenuClick);

function onMenuClick() {}
