import $ from 'jquery';

// delay length => shortest -> shorter -> short -> long -> longer -> longest
export const elements = {
    'UPWARD_NORMAL': null,
    'UPWARD_DELAY_SHORTEST': null,
    'UPWARD_DELAY_SHORTER': null,
    'UPWARD_DELAY_SHORT': null,
    'UPWARD_DELAY_LONG': null,
    'UPWARD_DELAY_LONGER': null,
    'UPWARD_DELAY_LONGEST': null,

    'FADE_NORMAL': null,
    'FADE_DELAY_SHORTEST': null,
    'FADE_DELAY_SHORTER': null,

    'RIGHTWARD_NORMAL': null,
    'RIGHTWARD_DELAY_SHORTEST': null,
    'RIGHTWARD_DELAY_SHORTER': null,

    'LEFTWARD_NORMAL': null,
    'LEFTWARD_DELAY_SHORTEST': null,
    'LEFTWARD_DELAY_SHORTER': null
}

$(function() {
    elements.UPWARD_NORMAL = $('.scrollreveal-upward-normal');
    elements.UPWARD_DELAY_SHORTEST = $('.scrollreveal-upward-delay-shortest');
    elements.UPWARD_DELAY_SHORTER = $('.scrollreveal-upward-delay-shorter');
    elements.UPWARD_DELAY_SHORT = $('.scrollreveal-upward-delay-short');
    elements.UPWARD_DELAY_LONG = $('.scrollreveal-upward-delay-long');
    elements.UPWARD_DELAY_LONGER = $('.scrollreveal-upward-delay-longer');
    elements.UPWARD_DELAY_LONGEST = $('.scrollreveal-upward-delay-longest');

    elements.FADE_NORMAL = $('.scrollreveal-fade-normal');
    elements.FADE_DELAY_SHORTEST = $('.scrollreveal-fade-shortest');
    elements.FADE_DELAY_SHORTER = $('.scrollreveal-fade-shorter');

    elements.RIGHTWARD_NORMAL = $('.scrollreveal-rightward-normal');
    elements.RIGHTWARD_DELAY_SHORTEST = $('.scrollreveal-rightward-shortest');
    elements.RIGHTWARD_DELAY_SHORTER = $('.scrollreveal-rightward-shorter');

    elements.LEFTWARD_NORMAL = $('.scrollreveal-leftward-normal');
    elements.LEFTWARD_DELAY_SHORTEST = $('.scrollreveal-leftward-shortest');
    elements.LEFTWARD_DELAY_SHORTER = $('.scrollreveal-leftward-shorter');
    
});