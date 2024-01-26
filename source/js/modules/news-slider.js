import Swiper from 'swiper';
import {Navigation, Pagination, Grid} from 'swiper/modules';
const sliderNews = document.querySelector('[data-set="news-slider"]');
const buttonNext = document.querySelector('[data-set="news-next"]');
const buttonPrev = document.querySelector('[data-set="news-prev"]');
const pagination = document.querySelector('[data-set="news-pagination"]');


const initNewsSwiper = () => {

  const newSliderNews = new Swiper(sliderNews, {
    modules: [Navigation, Pagination, Grid],
    loop: false,
    updateOnWindowResize: true,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },

    pagination: {
      el: pagination,
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${ className }">${ index + 1 }</span>`;
      },
    },

    breakpoints: {
      1440: {
        slidesPerView: 'auto',
        slidesPerGroup: 2,
        spaceBetween: 32,
        grid: {
          rows: 1,
        },
      },

      768: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 30,
        grid: {
          rows: 2,
          fill: 'column',
        },
      },

      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
        grid: {
          rows: 2,
          fill: 'column',
        },
      },
    },
  });

  return newSliderNews;
};

const createSliderNews = () => {
  if (document.body.contains(sliderNews)) {
    initNewsSwiper();
  }
};

export {createSliderNews};
