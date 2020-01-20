import "./sass/main.scss";
import ScrollReveal from 'scrollreveal';
import $ from "jquery";

// VIEWS
import { elements } from './js/views/base';
import * as scrollrevealViews from './js/views/scrollRevealViews';
import * as introductionView from './js/views/introductionView';

// MODELS
import scrollRevealConfig from './js/models/ScrollRevealConfig';
import Introduction from './js/models/Introduction';

$(function() {
    var s = skrollr.init();

    for(let el of elements.introductionBtns) {
        const dataType = $(el).data('type');
        const data = Introduction[dataType];
        $(el).click(() => {
            introductionView.switchContent(dataType, data);
        });
    }

    introductionView.switchContent('history', Introduction['history']);
    
    setUpScrollRevealAnim();
});


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
