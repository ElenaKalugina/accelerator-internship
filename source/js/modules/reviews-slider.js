import Swiper from 'swiper';
import {Navigation, Scrollbar} from 'swiper/modules';
const sliderReviews = document.querySelector('[data-set="reviews-slider"]');
const buttonNext = document.querySelector('[data-set="reviews-next"]');
const buttonPrev = document.querySelector('[data-set="reviews-prev"]');
const scrollbar = document.querySelector('[data-set="reviews-scrollbar"]');


const initReviewsSwiper = () => {

  const newSliderReviews = new Swiper(sliderReviews, {
    modules: [Navigation, Scrollbar],
    direction: 'horizontal',
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },

    scrollbar: {
      el: scrollbar,
      hide: false,
      dragSize: 392,
    },

    breakpoints: {
      1440: {
        slidesPerView: 2,
        spaceBetween: 32,
        allowTouchMove: false,
      },

      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        allowTouchMove: true,
        scrollbar: {
          dragSize: 324,
        },
      },

      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: 0,
        allowTouchMove: true,
        scrollbar: {
          el: '',
          enabled: false,
        },
      },
    },
  });

  return newSliderReviews;
};

const createReviewsSwiper = () => {
  if (document.body.contains(sliderReviews)) {
    initReviewsSwiper();
  }
};

export {createReviewsSwiper};
