// import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

// new Accordion('.accordion-container', {
//   duration: 100,
//   showMultiple: true,
//   onOpen: function (currentElement) {
//     console.log(currentElement);
//   },
// });

import Accordion from 'accordion-js'; 
import 'accordion-js/dist/accordion.min.css'; 
 
const open = document.querySelector('.ac-trigger'); 
 
new Accordion(['.container-first', '.container-second'], { 
  duration: 250, 
  showMultiple: true, 
}); 
 
open.click();