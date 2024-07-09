export const refsProj = {
  projectsSection: document.querySelector('#projects'),
  boxArrows: document.querySelector('.swiper-box-arrows'),
  prevBtnProjects: document.querySelector('.swiper-prev-btn'),
  nextBtnProjects: document.querySelector('.swiper-next-btn'),
};

export let isInView = false;

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

export function getDisabledPrevArrow(swiper, button) {
  if (swiper.isBeginning) {
    button.disabled = true;
  }
}
