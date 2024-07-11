import Swiper from "swiper";
import 'swiper/css';
import { getControlledSwiperByTab } from "./sliders";

const aboutSwiperBox = document.querySelector('.about-swiper-wrapper');
const boxAbout = document.querySelector('.about-skills-list-item');
const nextButtonAbout = document.querySelector('.swiper-next-btn-about');

const swiperAbout = new Swiper('.swiper-about', {
  direction: 'horizontal',
  speed: 400,
  spaceBetween: 0,
  slidesPerView: 2,
  slidesPerGroup: 1,
 loop: true,
 keyboard: {
    enabled: true,
    onlyInViewport: true,
},
mousewheel: {
  invert: true,
},
breakpoints: {
  768: {
      slidesPerView: 3,
  },
  1440: {
      slidesPerView: 6,
  },
},

// on: {
//   slideChange: function () {
//     const slides = this.slides;
//     slides.forEach(slide => slide.querySelector('.about-skills-list-item').style.backgroundColor = 'transparent');
//     const activeSlide = slides[this.activeIndex];
//     activeSlide.querySelector('.about-skills-list-item').style.backgroundColor = '#ed3b44';
//   },
// init: function () {
//     const slides = this.slides;
//     slides.forEach(slide => slide.querySelector('.about-skills-list-item').style.backgroundColor = '#transparent');
//     const initialSlide = slides[this.activeIndex];
//     initialSlide.querySelector('.about-skills-list-item').style.backgroundColor = '#ed3b44';
//   },
// },
});

nextButtonAbout.addEventListener('click', () => {
  swiperAbout.slideNext();
});


getControlledSwiperByTab(aboutSwiperBox, swiperAbout);

