import $ from "jquery";

export const elements = {
    introductionBtns: null,
    introductionParagraph: null,
};

$(function() {
    elements.introductionBtns = $('.introduction__list-item');
    elements.introductionParagraph = $('#introductionParagraph');
});
