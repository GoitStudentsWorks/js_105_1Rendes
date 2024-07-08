import axios from 'axios';
import Swiper from 'swiper/bundle';
import 'swiper/css';
import{getDisabledOrEnabledButtons, getControlledSwiperByTab, isInView} from "./sliders"
const nextButton = document.querySelector('.next-slide');
const prevButton = document.querySelector('.prev-slide');
const reviewsContainer = document.querySelector('.reviews-box');
const listContainer = reviewsContainer.querySelector('.reviews-list');
const reviewSection = document.querySelector('.reviews-section')
let swiperRev;
renderReviews();


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
        const markup = reviewsData.map(({ _id, author, avatar_url, review }) => {
            return `
                <li class="review-item swiper-slide">
                <div class="review-swiper-window "> 
     
                <div class="review-photo">
                        <img src="${avatar_url}" alt='${author}' class="avatar">
                    </div>
                    <div class="review-content">
                        <h3 class="review-author">${author}</h3>
                         <p class="review-text">${review}</p>
                    </div> 
                    </div>
                </li>`;
        }).join('');
        listContainer.innerHTML = markup;
     
} 
    catch (error) {
        alert('Error rendering reviews');
        console.error('Error rendering reviews:', error);
    }
}

swiperRev = new Swiper('.reviews-box', {
    direction: 'horizontal',
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 16,
    keyboard: {
                enabled: true,
                onlyInViewport: true,
            },
    mousewheel: {
                invert: true,
              },
    on: {
                slideChange: function () {
                    getDisabledOrEnabledButtons(this, prevButton, nextButton)
                },
            },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1440: {
            slidesPerView: 4,
        },
    },
    });   
  
    if (swiperRev.isBeginning) {
        prevButton.disabled = true;
    }
 
    getControlledSwiperByTab(reviewSection, swiperRev);

  nextButton.addEventListener('click', () => {
    swiperRev.slideNext();
  });
  prevButton.addEventListener('click', () => {
    swiperRev.slidePrev();
  });






