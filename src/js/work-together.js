import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://portfolio-js.b.goit.study/api',
});

const footerButon = document.querySelector('.footer-form-button');
const footerForm = document.querySelector('.footer-form');
const inputEmail = document.querySelector('.footer-form-email');
const inputComment = document.querySelector('.footer-form-comment');

let userEmail = ``;
let userComment = ``;

async function createPost(email, comment) {
  const params = new URLSearchParams({
    email: email,
    comment: comment,
  });

  const res = await axios.post({ params });
  return res.data;
}

footerForm.addEventListener(`submit`, async e => {
  e.preventDefault;

  userEmail = inputEmail.value.trim();
  userComment = inputComment.value.trim();

  const data = await createPost(userEmail, userComment);
});
