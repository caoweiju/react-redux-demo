'use strict';

const TIMEOUT_FETCH = 500;
let initConsults = [
    {
        id: 0,
        name: 'feifei',
        job: 'teacher',
        place: 'beijing',
        data: '这个是啥子东东'
    },
    {
        id: 1,
        name: 'dede',
        job: 'stu',
        place: 'nanjing',
        data: '这个是啥子西西'
    },
    {
        id: 2,
        name: 'soso',
        job: 'stu',
        place: 'shanghai',
        data: '这个是啥子南南'
    },
    {
        id: 3,
        name: 'huihui',
        job: 'boss',
        place: 'beijing',
        data: '这个是啥子北北'
    }
];

let fetchData = (config, callback) => {
    setTimeout( config => {
        callback(initConsults);
    }, config.time || TIMEOUT_FETCH);
};

export const LISTCONSULTS = 'LISTCONSULTS';
export const listConsults = (config) => {
    return dispatch => {
        fetchData(config, consultsData => {
            dispatch(consults(consultsData));
        });
    };
};

// render consults
export const CONSULTS = 'CONSULTS';
export const consults = (consults) => {
    return {
        type: CONSULTS,
        consults: consults
    };
};

// CHANGE consults
export const CHANGE = 'CHANGE';
export const change = (data) => {
    return {
        type: CHANGE,
        view: data
    };
};