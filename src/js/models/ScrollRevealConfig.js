const globalReset = true;
const delayBase = 100;
const delayStep = 40;

export default {
//------------------ UPWARD ------------------
    'UPWARD_NORMAL': {
        delay: delayBase,
        distance: '3rem',
        origin: 'bottom',
        reset: globalReset,
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
    },
    'UPWARD_DELAY_SHORTEST': {
        delay: delayBase + delayStep * 1,
        distance: '3rem',
        origin: 'bottom',
        reset: globalReset,
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
    },
    'UPWARD_DELAY_SHORTER': {
        delay: delayBase + delayStep * 2,
        distance: '3rem',
        origin: 'bottom',
        reset: globalReset,
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
    },
    'UPWARD_DELAY_SHORT': {
        delay: delayBase + delayStep * 3,
        distance: '3rem',
        origin: 'bottom',
        reset: globalReset,
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
    },
    'UPWARD_DELAY_LONG': {
        delay: delayBase + delayStep * 4,
        distance: '3rem',
        origin: 'bottom',
        reset: globalReset,
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
    },
    'UPWARD_DELAY_LONGER': {
        delay: delayBase + delayStep * 5,
        distance: '3rem',
        origin: 'bottom',
        reset: globalReset,
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
    },
    'UPWARD_DELAY_LONGEST': {
        delay: delayBase + delayStep * 6,
        distance: '3rem',
        origin: 'bottom',
        reset: globalReset,
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
    },
//------------------ LEFTWARD ------------------
    'LEFTWARD_NORMAL': {
        delay: delayBase,
        distance: '3rem',
        origin: 'right',
        reset: globalReset,
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
    },
    'LEFTWARD_DELAY_100': {
        delay: delayBase + 100,
        distance: '3rem',
        origin: 'right',
        reset: globalReset,
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
    },
//------------------ RIGHTWARD ------------------
    'RIGHTWARD_NORMAL': {
        delay: delayBase,
        distance: '3rem',
        origin: 'left',
        reset: globalReset,
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
    }
}