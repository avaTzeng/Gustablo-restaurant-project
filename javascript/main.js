import { elements } from './views/base.js';
import ScrollRevealConfig from './configs/scrollRevealConfig.js';
import ScrollReveal from '../node_modules/scrollreveal';

$(function() {
    var s = skrollr.init({
        render: function(data) {
            // console.log(data.curTop);
        }
    });

    // setUpScrollRevealAnim();

});


// function setUpScrollRevealAnim() {
//     // elements.titleDivider
//     ScrollReveal().reveal(elements.titleDivider, ScrollRevealConfig.CONTENT_UPWARD);
// }