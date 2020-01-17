const globalReset = true;
const delayBase = 100;
const delayStep = {
    mov: 40,
    fade: 140
}

const movOffset = {
    upward: '3rem',
    leftWard: '3rem',
    rightWard: '3rem',
}

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
        delay: delayBase + delayStep.mov * 1,
        distance: '3rem',
        origin: 'bottom',
        reset: globalReset,
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
    },
    'UPWARD_DELAY_SHORTER': {
        delay: delayBase + delayStep.mov * 2,
        distance: '3rem',
        origin: 'bottom',
        reset: globalReset,
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
    },
    'UPWARD_DELAY_SHORT': {
        delay: delayBase + delayStep.mov * 3,
        distance: '3rem',
        origin: 'bottom',
        reset: globalReset,
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
    },
    'UPWARD_DELAY_LONG': {
        delay: delayBase + delayStep.mov * 4,
        distance: '3rem',
        origin: 'bottom',
        reset: globalReset,
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
    },
    'UPWARD_DELAY_LONGER': {
        delay: delayBase + delayStep.mov * 5,
        distance: '3rem',
        origin: 'bottom',
        reset: globalReset,
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
    },
    'UPWARD_DELAY_LONGEST': {
        delay: delayBase + delayStep.mov * 6,
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
    'LEFTWARD_DELAY_SHORTEST': {
        delay: delayBase + delayStep.mov * 1,
        distance: movOffset.leftWard,
        origin: 'right',
        reset: globalReset,
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
    },
    'LEFTWARD_DELAY_SHORTER': {
        delay: delayBase + delayStep.mov * 2,
        distance: movOffset.leftWard,
        origin: 'right',
        reset: globalReset,
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
    },
    'LEFTWARD_DELAY_SHORT': {
        delay: delayBase + delayStep.mov * 3,
        distance: movOffset.leftWard,
        origin: 'right',
        reset: globalReset,
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
    },
//------------------ RIGHTWARD ------------------
    'RIGHTWARD_NORMAL': {
        delay: delayBase,
        distance: movOffset.rightWard,
        origin: 'left',
        reset: globalReset,
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
    },
    'RIGHTWARD_DELAY_SHORTEST': {
        delay: delayBase + delayStep.mov * 1,
        distance: movOffset.rightWard,
        origin: 'left',
        reset: globalReset,
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
    },
    'RIGHTWARD_DELAY_SHORTER': {
        delay: delayBase + delayStep.mov * 2,
        distance: movOffset.rightWard,
        origin: 'left',
        reset: globalReset,
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
    },
//------------------ FADEWARD ------------------
    'FADE_NORMAL': {
        delay: delayBase,
        opacity: 0,
        reset: globalReset
    },
    'FADE_DELAY_SHORTEST': {
        delay: delayBase + delayStep.fade * 1,
        opacity: 0,
        reset: globalReset
    },
    'FADE_DELAY_SHORTER': {
        delay: delayBase + delayStep.fade * 2,
        opacity: 0,
        reset: globalReset
    }
}