export const refsProj = {
  projectsSection: document.querySelector('#projects'),
  boxArrows: document.querySelector('.swiper-box-arrows'),
  prevBtnProjects: document.querySelector('.swiper-prev-btn'),
  nextBtnProjects: document.querySelector('.swiper-next-btn'),
}; // елементи до проджектс

export let isInView = false;

export function getDisabledOrEnabledButtons(t, prev, next) {
//вмикання вимикання кнопок в залежності який слайд
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
  //екземпляр для спостереження за видимістю секції
  const observer = new IntersectionObserver(
    //приймає і перебирає масив entries
    entries => {
      entries.forEach(entry => {
      //змінює isInView на тру якщо зявляється в полі зору
        isInView = entry.isIntersecting;
      });
    },
    {
      //умова при якій запускається виклик 95% секції в полі зору
      threshold: 0.95,
    }
  );
  observer.observe(Section);//спостерігаємо за секцією

  document.addEventListener('keydown', function (event) {
    //гортання слайдів Табом тільки якщо isINView = true
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
//вимикаємо прев кнопку якщо 1 слайд
export function getDisabledPrevArrow(swiper, button) {
  if (swiper.isBeginning) {
    button.disabled = true;
  }
}
