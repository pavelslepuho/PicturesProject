import modals from "./modules/modals";
import sliders from './modules/sliders';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    modals();
    sliders('.main-slider-item', 'fadeInDown');
    sliders('.feedback-slider-item', 'fadeInLeft', '.main-next-btn', '.main-prev-btn');
});