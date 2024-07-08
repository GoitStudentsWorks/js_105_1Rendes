import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://portfolio-js.b.goit.study/api',
});

const footerForm = document.querySelector('.footer-form');
const inputEmail = document.querySelector('.footer-form-email');
const inputComment = document.querySelector('.footer-form-comment');
const footerModal = document.querySelector('.footer-modal');
const footerModalCloseBtn = document.querySelector(
  '.footer-modal-close-btn-icon'
);

// const inputElem = document.getElementById('input');

// inputElem.addEventListener('input', () => {
//   const maxLengthInput = inputElem.length;
//   console.log(maxLengthInput);
//   const currentLength = inputElem.value.length;
//   console.log(currentLength);

//   if (currentLength > maxLengthInput) {
//     inputElem.value = inputElem.value.substring(maxLengthInput);
//   }
// });

async function createPost(email, comment) {
  try {
    const res = await axios.post('/requests', { email, comment });
    return res.data;
  } catch (error) {
    throw new Error(error.res.data.message);
  }
}

footerForm.addEventListener(`submit`, async e => {
  e.preventDefault();

  const userEmail = inputEmail.value.trim();
  const userComment = inputComment.value.trim();

  try {
    const data = await createPost(userEmail, userComment);
    if (data) {
      showModal();
      hideModal();
    }
    footerForm.reset();
  } catch (error) {
    iziToast.warning({
      title: 'WARNING',
      message: 'Enter the correct data',
      position: 'bottomCenter',
    });
    console.error('Помилка:', error);
  }
});

function showModal() {
  footerModal.classList.add('is-open');
}

function hideModal() {
  footerModalCloseBtn.addEventListener('click', () => {
    footerModal.classList.remove('is-open');
  });
}

window.addEventListener('click', e => {
  if (e.target == footerModal) {
    footerModal.classList.remove('is-open');
  }
});
