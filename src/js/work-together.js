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
const errorMessage = document.querySelector('.error-message');
const errorCommMessage = document.querySelector('.error-comm-message');
const footerModalCloseBtn = document.querySelector(
  '.footer-modal-close-btn-icon'
);

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
  if (!inputEmail.checkValidity()) {
    inputEmail.classList.remove('correct-email');
    inputEmail.classList.add('incorrect-email');
    errorMessage.classList.remove('success-message');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = 'Invalid email, try again';
    return;
  } else {
    inputEmail.classList.remove('incorrect-email');
    inputEmail.classList.add('correct-email');
    errorMessage.classList.remove('error-message');
    errorMessage.classList.add('success-message');
    errorMessage.textContent = 'Success!';
  }
  if (!inputComment.checkValidity()) {
    inputComment.classList.remove('correct-email');
    inputComment.classList.add('incorrect-email');
    errorCommMessage.classList.remove('success-message');
    errorCommMessage.classList.add('error-comm-message');
    errorCommMessage.textContent = 'Please, send us a message.';
    return;
  } else {
    inputComment.classList.remove('incorrect-email');
    inputComment.classList.add('correct-email');
    errorCommMessage.classList.remove('error-comm-message');
    errorCommMessage.classList.add('success-message');
    errorCommMessage.textContent = 'Success!';
  }

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
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' || event.key === 'Esc') {
      footerModal.classList.remove('is-open');
    }
  });
}

window.addEventListener('click', e => {
  if (e.target == footerModal) {
    footerModal.classList.remove('is-open');
  }
});
