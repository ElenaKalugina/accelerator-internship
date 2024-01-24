import Swiper from 'swiper';
import {Navigation, Scrollbar} from 'swiper/modules';
const sliderPrograms = document.querySelector('[data-set="programs-slider"]');
const buttonNext = document.querySelector('[data-set="programs-next"]');
const buttonPrev = document.querySelector('[data-set="programs-prev"]');
const scrollbar = document.querySelector('[data-set="programs-scrollbar"]');


const initProgramsSwiper = () => {

  const newSliderPrograms = new Swiper(sliderPrograms, {
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
        slidesPerView: 3,
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
        initialSlide: 1,
        allowTouchMove: true,
      },
    },
  });

  return newSliderPrograms;
};

const createSliderPrograms = () => {
  if (document.body.contains(sliderPrograms)) {
    initProgramsSwiper();
  }
};

export {createSliderPrograms};
