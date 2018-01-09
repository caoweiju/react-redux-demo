'use strict';

import {indexReducer} from './../reducers/index.js';
import {dataReducer} from './../reducers/data.js';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

let reducers = combineReducers({
    indexReducer,
    dataReducer
});

/*
let thunkCreateStore = applyMiddleware(thunk)(createStore);
let Store = thunkCreateStore(reducers);

export default Store;
*/


export default (function(initialState) {
    let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
    let store = createStoreWithMiddleware(reducers, initialState);
    return store;
})({});

