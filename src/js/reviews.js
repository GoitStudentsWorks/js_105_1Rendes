import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/css';

const reviewsContainer = document.querySelector('.reviews-box');
const listContainer = reviewsContainer.querySelector('.swiper-wrapper');


async function getReviews() {
    const BASE_URL = 'https://portfolio-js.b.goit.study/api';
    const END_POINT = '/reviews'; 
    const url = `${BASE_URL}${END_POINT}`;
    try {
        const response = await axios.get(url);
        const data = response.data;
        return data;
    } catch (error) {
        console.error('Error fetching reviews:', error);
        throw error;
    }
}

 async function renderReviews () {
    try{
        const reviewsData = await getReviews(); 
        if (!reviewsData || reviewsData.length === 0) {
            reviewsContainer.innerHTML = '<p class="review-error">Not found</p>';
            return;
        }
        const markup = reviewsData.map(({ author, avatar_url, review }) => {
            return `
                <li class="review-item swiper-slide">
                    <div class="review-photo">
                        <img src="${avatar_url}" alt='${author}' class="avatar">
                    </div>
                    <div class="review-content">
                        <h3 class="author">${author}</h3>
                        <p class="text">${review}</p>
                    </div>
                </li>`;
        }).join('');
        
        listContainer.innerHTML = markup;
        const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    loopAdditionalSlides: 1,
    speed: 400,
    spaceBetween: 30,
  
  });
    }
    catch (error) {
        alert('Error rendering reviews');
        console.error('Error rendering reviews:', error);
    }
}
renderReviews();
