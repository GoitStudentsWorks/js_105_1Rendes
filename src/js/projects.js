import Swiper from 'swiper/bundle';
import 'swiper/css';

const prevBtnProjects = document.querySelector('.projects-prev-btn');
const nextBtnProjects = document.querySelector('.projects-next-btn');
const projectsSection = document.querySelector('#projects');

export let isInView = false;

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

if (swiperProjects.isBeginning) {
  prevBtnProjects.disabled = true;
}

prevBtnProjects.addEventListener('click', () => {
  swiperProjects.slidePrev();
});
nextBtnProjects.addEventListener('click', () => {
  swiperProjects.slideNext();
});

getControlledSwiperByTab(projectsSection, swiperProjects);

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

export function getControlledSwiperByTab(Section, swiper) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        isInView = entry.isIntersecting;
      });
    },
    {
      threshold: 0.95,
    }
  );
  observer.observe(Section);

  document.addEventListener('keydown', function (event) {
    // getControlledSwiperByTab(projectsSection);
    if (event.key === 'Tab' && isInView) {
      event.preventDefault();
      if (event.shiftKey) {
        swiper.slidePrev();
      } else {
        swiper.slideNext();
      }
    }
  });
}
