'use strict';

import {listConsults} from './data.js';

// init get data
export const INIT = 'INIT';
export const init = (config) => {
    return dispatch => {
        dispatch(index({config}));
        dispatch(listConsults(config));
    };
};

// init render config
export const INDEX = 'INDEX';
export const index = (config) => {
    return {
        type: INDEX,
        tit: config.tit,
        subtit: config.subtit,
        tags: config.tags,
        content: config.content,
        author: config.author,
        date: config.date
    };
};
