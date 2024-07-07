import Swiper from 'swiper/bundle';
import 'swiper/css';
import {
  getControlledSwiperByTab,
  getDisabledOrEnabledButtons,
  onDOMContentLoaded,
  refs,
  prevBtnProjects,
  nextBtnProjects,
} from './sliders';

document.addEventListener('DOMContentLoaded', () => {
  onDOMContentLoaded(swiperProjects, refs.boxArrows);
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
      getDisabledOrEnabledButtons(this, prevBtnProjects, nextBtnProjects);
    },
  },
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 30,
    slideShadows: true,
  },
});

getControlledSwiperByTab(refs.projectsSection, swiperProjects);
