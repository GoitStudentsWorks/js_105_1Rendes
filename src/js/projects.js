import Swiper from 'swiper/bundle';
import 'swiper/css';
import {
  getControlledSwiperByTab,
  getDisabledOrEnabledButtons,
  getDisabledPrevArrow,
  refsProj,
} from './sliders';

refsProj.prevBtnProjects.addEventListener('click', () => {
  swiperProjects.slidePrev();
});
refsProj.nextBtnProjects.addEventListener('click', () => {
  swiperProjects.slideNext();
});


const swiperProjects = new Swiper('.project-swiper', {
  direction: 'horizontal',
  speed: 1500,
  spaceBetween: 80,
  centerInsufficientSlides: true,
  centeredSlidesBounds: true,
  grabCursor: true,
  preventClicks: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: {
    invert: true,
  },
  on: {
    slideChange: function () {
      getDisabledOrEnabledButtons(
        this,
        refsProj.prevBtnProjects,
        refsProj.nextBtnProjects
      );
    },
  },
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 30,
    slideShadows: true,
  },
});

getDisabledPrevArrow(swiperProjects, refsProj.prevBtnProjects);


getControlledSwiperByTab(refsProj.projectsSection, swiperProjects);
