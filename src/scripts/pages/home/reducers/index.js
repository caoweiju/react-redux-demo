'use strict';

import {INDEX} from './../actions/index.js';

export const indexReducer = (
    state = {
        tit: '这是一篇文章的标题',
        subtit: '这是一篇文章的副标题',
        tags: ['科技', '明显', '八卦'],
        content: '这是文章内容..............................',
        author: 'cwj',
        date: '2011-12-12'
    }, action
) => {
    switch(action.type) {
        case INDEX:
            return {
                ...state,
                tit: action.tit || state.tit,
                subtit: action.subtit || state.subtit,
                tags: action.tags || state.tags,
                content: action.content || state.content,
                author: action.author || state.author,
                date: action.date || state.date
            };
            // 不需要 break
        default :
            return state;
    }
};