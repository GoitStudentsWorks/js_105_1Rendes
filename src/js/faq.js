import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.accordion-container', {
  duration: 100,
  showMultiple: true,
  onOpen: function (currentElement) {
    console.log(currentElement);
  },
});
