import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordionAbout = new Accordion('.container-second', {
  duration: 250,
  showMultiple: true,
});

const accordionFaq = new Accordion('.container-first', {
  duration: 250,
  showMultiple: true,
});

document.addEventListener('DOMContentLoaded', e => {
  accordionAbout.open(0);
});
