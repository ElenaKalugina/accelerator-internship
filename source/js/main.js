import {iosVhFix} from './utils/ios-vh-fix';
import {Form} from './vendor/form-validate/form';
import {menuToggle} from './modules/menu-toggle.js';
import {createSliderHero} from './modules/hero-slider.js';
import {initAccordions} from './vendor/accordions/init-accordion';
import {createSliderPrograms} from './modules/programs-slider.js';
import {createSliderNews} from './modules/news-slider.js';
import {createReviewsSwiper} from './modules/reviews-slider.js';
import {CustomSelect} from './vendor/custom-select/custom-select';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  menuToggle();
  createSliderHero();
  createSliderPrograms();
  createSliderNews();
  createReviewsSwiper();

  window.addEventListener('load', () => {
    initAccordions();

    const select = new CustomSelect();
    select.init();

    const form = new Form();
    window.form = form;
    form.init();
  });
});
