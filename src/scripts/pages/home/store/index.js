'use strict';

import {indexReducer} from './../reducers/index.js';
import {dataReducer} from './../reducers/data.js';

import {createStore, combineReducers, applyMiddleware} from 'reduce';
import thunk from 'reduce-thunk';

let reducers = combineReducers({
    indexReducer,
    dataReducer
});

let thunkCreateStore = applyMiddleware(thunk)(createStore);
let Store = thunkCreateStore(reducers);

/*
export default (function(initialState) {
    let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
    let store = createStoreWithMiddleware(reducers, initialState);
    return store;
  })({});
*/

export default Store;