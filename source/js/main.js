// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// // import 'swiper/css';

import {iosVhFix} from './utils/ios-vh-fix';
import {menuToggle} from './modules/menu-toggle.js';
import {createSliderHero} from './modules/hero-slider.js';
import {initAccordions} from './vendor/accordions/init-accordion';
import {createSliderPrograms} from './modules/programs-slider.js';
import {createSliderNews} from './modules/news-slider.js';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  menuToggle();
  createSliderHero();
  createSliderPrograms();
  createSliderNews();

  window.addEventListener('load', () => {
    initAccordions();
  });
});
