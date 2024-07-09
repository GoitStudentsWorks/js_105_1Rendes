import Hero from '../img/hero/Hero.png';
import heroTabletGreens from '../img/hero/hero-tablet-greens.png';
import heroMobileGreen from '../img/hero/hero-mobile-green.png';
import heroDesktopBackground from '../img/hero/hero-desktop-background.png';
import heroTabletBackground from '../img/hero/hero-tablet-backround.png';
import heroMobBackground from '../img/hero/hero-mob-background.png';
import heroDesktopBlue from '../img/hero/hero-desktop-blue.png';
import heroTabletBlues from '../img/hero/hero-tablet-blues.png';
import heroMobileBlue from '../img/hero//hero-mobile-blue.png';
import heroDesktopCoral from '../img/hero/hero-desktop-coral.png';
import heroTabletCorals from '../img/hero/hero-tablet-corals.png';
import heroMobileCoral from '../img/hero/hero-mobile-coral.png';
import heroDesktopSlate from '../img/hero/hero-desktop-slate.png';
import heroTabletSlates from '../img/hero/hero-tablet-slates.png';
import heroMobileSlate from '../img/hero/hero-mobile-slate.png';
import heroDesktopOrange from '../img/hero/hero-desktop-orange.png';
import heroTabletOranges from '../img/hero/hero-tablet-oranges.png';
import heroMobileOrange from '../img/hero/hero-mobile-orange.png';

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
    '--bg-image-default': `url(${heroDesktopBlue})`,
    '--text-color-default': 'rgba(0, 65, 232, 1)',
    '--bg-color-default': '#0041e8',
    '--bg-color-hover-default': '#003bcf',
    '--bg-image-tablet': `url(${heroTabletBlues})`,
    '--bg-image-mobile': `url(${heroMobileBlue})`,
  },
  coral: {
    '--bg-image-default': `url(${heroDesktopCoral})`,
    '--text-color-default': 'rgba(230, 83, 60, 1)',
    '--bg-color-default': '#e6533c',
    '--bg-color-hover-default': '#e64933',
    '--bg-image-tablet': `url(${heroTabletCorals})`,
    '--bg-image-mobile': `url(${heroMobileCoral})`,
  },
  slate: {
    '--bg-image-default': `url(${heroDesktopSlate})`,
    '--text-color-default': 'rgba(43, 68, 65, 1)',
    '--bg-color-default': '#2b4441',
    '--bg-color-hover-default': '#293f3c',
    '--bg-image-tablet': `url(${heroTabletSlates})`,
    '--bg-image-mobile': `url(${heroMobileSlate})`,
  },
  orange: {
    '--bg-image-default': `url(${heroDesktopOrange})`,
    '--text-color-default': 'rgba(255, 127, 8, 1)',
    '--bg-color-default': '#ff7f08',
    '--bg-color-hover-default': '#ff7b08',
    '--bg-image-tablet': `url(${heroTabletOranges})`,
    '--bg-image-mobile': `url(${heroMobileOrange})`,
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
