import modals from "./modules/modals";
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';
import filter from './modules/filter';
import pictureSize from './modules/pictureSize';
import accordeon from "./modules/accordeon";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    modals();
    sliders('.main-slider-item', 'fadeInDown');
    sliders('.feedback-slider-item', 'fadeInLeft', '.main-next-btn', '.main-prev-btn');
    forms();
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    showMoreStyles();
    calc();
    filter();
    pictureSize('.sizes-block');
    accordeon();
});
