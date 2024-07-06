const menuBtn = document.querySelector('.header-menubtn');
const mobMenuBtn = document.querySelector('.header-mob-menubtn');
const headerMenu = document.querySelector('.header-menu');
const headerMobMenu = document.querySelector('.header-mob-menu');
const headerCloseIcon = document.querySelector('.header-close-icon');

menuBtn.addEventListener('click', () =>
  headerMenu.classList.toggle('header-hidden')
);
mobMenuBtn.addEventListener('click', () =>
  headerMobMenu.classList.toggle('header-mob-hidden')
);
headerCloseIcon.addEventListener('click', () =>
  headerMobMenu.classList.toggle('header-mob-hidden')
);
