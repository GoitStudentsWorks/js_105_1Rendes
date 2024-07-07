import Swiper from 'swiper/bundle';
import 'swiper/css';

const prevBtnProjects = document.querySelector('.projects-prev-btn');
const nextBtnProjects = document.querySelector('.projects-next-btn');

const swiperProjects = new Swiper('.project-swiper', {
  direction: 'horizontal',
  speed: 1500,
  spaceBetween: 30,
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
  // allowSlidePrev: true,
  // allowSlideNext,
  // effect: 'coverflow',
  // coverflowEffect: {
  //   rotate: 30,
  //   slideShadows: true,
  // },
});

if (swiperProjects.isBeginning) {
  prevBtnProjects.disabled = true;
}

export function getDisabledOrEnabledButtons(t, prev, next) {
  if (t.isBeginning) {
    prev.disabled = true;
  } else if (t.isEnd) {
    next.disabled = true;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
}

prevBtnProjects.addEventListener('click', () => {
  swiperProjects.slidePrev();
});
nextBtnProjects.addEventListener('click', () => {
  swiperProjects.slideNext();
});
