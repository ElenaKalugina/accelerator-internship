import Swiper from 'swiper';
import {Pagination} from 'swiper/modules';

const sliderHero = document.querySelector('[data-set="hero-slider"]');
//const paginationHero = document.querySelector('[data-set="hero-pagination"]');

const initSliderHero = () => {

  const newSliderHero = new Swiper(sliderHero, {
    modules: [ Pagination],

    pagination: {
      el: '.swiper-slide-active .hero__pagination',
      type: 'bullets',
      clickable: true,
    },

    on: {
      slideChangeTransitionStart: function () {
        newSliderHero.pagination.init();
        newSliderHero.pagination.render();
        newSliderHero.pagination.update();
      }
    },

    autoHeight: true,
    loop: true,
    breakpoints: {
      1440: {
        allowTouchMove: false,
      },
      768: {
        allowTouchMove: true,
      },
      320: {
        allowTouchMove: true,
      },
    },
  });

  return newSliderHero;
};

const createSliderHero = () => {
  if (document.body.contains(sliderHero)) {
    initSliderHero();
  }
};

export {createSliderHero};
