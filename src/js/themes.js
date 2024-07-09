import Hero from '../img/hero/Hero.png';
import heroTabletGreens from '../img/hero/hero-tablet-greens.png';
import heroMobileGreen from '../img/hero/hero-mobile-green.png';
import heroDesktopBackground from '../img/hero/hero-desktop-background.png';
import heroTabletBackground from '../img/hero/hero-tablet-backround.png';
import heroMobBackground from '../img/hero/hero-mob-background.png';
// import hero from '../img/hero/Hero.png';
// import hero from '../img/hero/Hero.png';
// import hero from '../img/hero/Hero.png';
// import hero from '../img/hero/Hero.png';
// import hero from '../img/hero/Hero.png';
// import hero from '../img/hero/Hero.png';
// import hero from '../img/hero/Hero.png';
// import hero from '../img/hero/Hero.png';

const colorsWebPage = {
  green: {
    '--bg-image-default': `url(${Hero})`,
    '--text-color-default': 'rgba(198, 227, 39, 1)',
    '--bg-color-default': '#c6e327',
    '--bg-color-hover-default': '#b2d61a',
    '--bg-image-tablet': `url(${heroTabletGreens})`,
    '--bg-image-mobile': `url(${heroMobileGreen})`,
  },
  red: {
    '--bg-image-default': `url(${heroDesktopBackground})`,
    '--text-color-default': 'rgba(237, 59, 68)',
    '--bg-color-default': '#ed3b44',
    '--bg-color-hover-default': '#e0373f',
    '--bg-image-tablet': `url(${heroTabletBackground})`,
    '--bg-image-mobile': `url(${heroMobBackground})`,
  },
  blue: {
    '--bg-image-default': 'url(../img/hero/hero-desktop-blue.png)',
    '--text-color-default': 'rgba(0, 65, 232, 1)',
    '--bg-color-default': '#0041e8',
    '--bg-color-hover-default': '#003bcf',
    '--bg-image-tablet': 'url(../img/hero/hero-tablet-blues.png)',
    '--bg-image-mobile': 'url(../img/hero//hero-mobile-blue.png)',
  },
  coral: {
    '--bg-image-default': 'url(../img/hero/hero-desktop-coral.png)',
    '--text-color-default': 'rgba(230, 83, 60, 1)',
    '--bg-color-default': '#e6533c',
    '--bg-color-hover-default': '#e64933',
    '--bg-image-tablet': 'url(../img/hero/hero-tablet-corals.png)',
    '--bg-image-mobile': 'url(../img/hero/hero-mobile-coral.png)',
  },
  slate: {
    '--bg-image-default': 'url(../img/hero/hero-desktop-slate.png)',
    '--text-color-default': 'rgba(43, 68, 65, 1)',
    '--bg-color-default': '#2b4441',
    '--bg-color-hover-default': '#293f3c',
    '--bg-image-tablet': 'url(../img/hero/hero-tablet-slates.png)',
    '--bg-image-mobile': 'url(../img/hero/hero-mobile-slate.png)',
  },
  orange: {
    '--bg-image-default': 'url(../img/hero/hero-desktop-orange.png)',
    '--text-color-default': 'rgba(255, 127, 8, 1)',
    '--bg-color-default': '#ff7f08',
    '--bg-color-hover-default': '#ff7b08',
    '--bg-image-tablet': 'url(../img/hero/hero-tablet-oranges.png)',
    '--bg-image-mobile': 'url(../img/hero/hero-mobile-orange.png)',
  },
};

document
  .querySelector('.navigation-colors')
  .addEventListener('click', function (e) {
    if (e.target.classList.contains('box-colors')) {
      const color = e.target.getAttribute('data-color');
      if (colorsWebPage[color]) {
        Object.entries(colorsWebPage[color]).forEach(([key, value]) => {
          document.documentElement.style.setProperty(key, value);
        });
      }
    }
  });
