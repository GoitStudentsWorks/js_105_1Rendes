import Swiper from 'swiper/bundle';
import 'swiper/css';
const swiperProjects = new Swiper('.project-swiper', {
  direction: 'horizontal',
  speed: 1500,
  centerInsufficientSlides: true,
  centeredSlidesBounds: true,
  // effect: 'coverflow',
  coverflowEffect: {
    rotate: 30,
    slideShadows: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const prevBtnProjects = document.querySelector('.projects-prev-box');
const nextBtnProjects = document.querySelector('.projects-next-box');

prevBtnProjects.addEventListener('click', () => {
})



