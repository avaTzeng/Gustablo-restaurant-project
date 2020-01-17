import "./sass/main.scss";

import ScrollReveal from 'scrollreveal';
import $ from "jquery";

// import VIEWS
// import { elements } from './js/views/base';
import * as scrollrevealViews from './js/views/scrollRevealViews';

// import MODELS
import scrollRevealConfig from './js/models/ScrollRevealConfig';

window.addEventListener('load', () => {

});

$(function() {
    var s = skrollr.init({
        render: function(data) {
            // console.log(data.curTop);
        }
    });

    setUpScrollRevealAnim();
});


// Register all the elements that require scroll reveal animation
function setUpScrollRevealAnim() {

    for (let el of scrollrevealViews.upwardElements.normal) {
        ScrollReveal().reveal(el, scrollRevealConfig.UPWARD_NORMAL);
    }

    for (let el of scrollrevealViews.upwardElements.delayShortest) {
        ScrollReveal().reveal(el, scrollRevealConfig.UPWARD_DELAY_SHORTEST);
    }

    for (let el of scrollrevealViews.upwardElements.delayShorter) {
        ScrollReveal().reveal(el, scrollRevealConfig.UPWARD_DELAY_SHORTER);
    }

    for (let el of scrollrevealViews.upwardElements.delayShort) {
        ScrollReveal().reveal(el, scrollRevealConfig.UPWARD_DELAY_SHORT);
    }

    for (let el of scrollrevealViews.upwardElements.delayLong) {
        ScrollReveal().reveal(el, scrollRevealConfig.UPWARD_DELAY_LONG);
    }

    for (let el of scrollrevealViews.upwardElements.delayLonger) {
        ScrollReveal().reveal(el, scrollRevealConfig.UPWARD_DELAY_LONGER);
    }

    for (let el of scrollrevealViews.upwardElements.delayLongest) {
        ScrollReveal().reveal(el, scrollRevealConfig.UPWARD_DELAY_LONGEST);
    }


    // for(let el of scrollrevealViews.elements.UPWARD_CONTENT) {

    // }

    // for(let titleDivider of elements.titleDividers) {
    //     ScrollReveal().reveal(titleDivider, ScrollRevealConfig.CONTENT_UPWARD);
    // }
    
}
