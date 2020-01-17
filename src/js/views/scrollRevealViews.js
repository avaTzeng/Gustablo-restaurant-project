import $ from 'jquery';

// delay length => shortest -> shorter -> short -> long -> longer -> longest
export const upwardElements = {
    normal: null,
    delayShortest: null,
    delayShorter: null,
    delayShort: null,
    delayLong: null,
    delayLonger: null,
    delayLongest: null
}

$(function() {
    upwardElements.normal = $('.scrollreveal-upward-normal');
    upwardElements.delayShortest = $('.scrollreveal-upward-delay-shortest');
    upwardElements.delayShorter = $('.scrollreveal-upward-delay-shorter');
    upwardElements.delayShort = $('.scrollreveal-upward-delay-short');
    upwardElements.delayLong = $('.scrollreveal-upward-delay-long');
    upwardElements.delayLonger = $('.scrollreveal-upward-delay-longer');
    upwardElements.delayLongest = $('.scrollreveal-upward-delay-longest');
});