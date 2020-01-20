import $ from 'jquery';
import { elements } from './base';

export const switchContent = (type, data) => {

    for(let el of elements.introductionBtns) {
        $(el).removeClass('introduction__list-item--active');

        if($(el).data('type') === type) {
            $(el).removeClass('introduction__list-item--inactivated');
            $(el).addClass('introduction__list-item--active');
        } else {
            $(el).addClass('introduction__list-item--inactivated');
        }
    }

    $(elements.introductionParagraph).text(data);
};