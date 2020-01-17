import "./sass/main.scss";

import ScrollReveal from 'scrollreveal';
import animate from 'animate.css';
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

    for(let prop in scrollrevealViews.elements) {
        const el = scrollrevealViews.elements[prop];
        if(scrollRevealConfig[prop]) {
            ScrollReveal().reveal(el, scrollRevealConfig[prop]);
        } else {
            console.log('Error:', `${scrollRevealConfig[prop]} 中並沒有 scrollrevealViews 的 ${prop} 設定資料`);
        }
    }
}
