'use strict';

const TIMEOUT_FETCH = 500;
let initConsults = [
    {
        id: 0,
        name: 'feifei',
        age: 20,
        sex: 'female',
        job: 'teacher',
        place: 'beijing'
    },
    {
        id: 1,
        name: 'dede',
        age: 21,
        sex: 'female',
        job: 'stu',
        place: 'nanjing'
    },
    {
        id: 2,
        name: 'soso',
        age: 14,
        sex: 'male',
        job: 'stu',
        place: 'shanghai'
    },
    {
        id: 3,
        name: 'huihui',
        age: 40,
        sex: 'female',
        job: 'boss',
        place: 'beijing'
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
        fetchData(config, consults => {
            dispatch(consults(consults));
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