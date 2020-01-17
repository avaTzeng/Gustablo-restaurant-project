import "./sass/main.scss";

import ScrollReveal from 'scrollreveal';
import $ from "jquery";

import { elements } from './js/views/base';
import ScrollRevealConfig from './js/configs/scrollRevealConfig';

window.addEventListener('load', () => {

});

$(function() {
    console.log('Hey');
    var s = skrollr.init({
        render: function(data) {
            // console.log(data.curTop);
        }
    });

    setUpScrollRevealAnim();
});


function setUpScrollRevealAnim() {

    for(let titleDivider of elements.titleDividers) {
        ScrollReveal().reveal(titleDivider, ScrollRevealConfig.CONTENT_UPWARD);
    }
    
}
