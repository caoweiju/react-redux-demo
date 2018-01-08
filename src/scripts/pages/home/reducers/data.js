'use strict';

import {CONSULTS} from './../actions/data.js';

export const indexReducer = (
    state = {
        consults: [] // 评论
    }, action
) => {
    switch(action.type) {
        case CONSULTS:
            return {
                ...state,
                consults: action.consults || state.consults
            };
        default :
            return state;
    }
};