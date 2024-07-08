import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const open = document.querySelector('.ac-trigger');

new Accordion(['.container-first', '.container-second'], {
  duration: 250,
  showMultiple: true,
});

open.click();
