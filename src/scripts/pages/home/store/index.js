'use strict';

import {indexReducer} from './../reducers/index.js';
import {dataReducer} from './../reducers/data.js';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

let reducers = combineReducers({
    indexReducer,
    dataReducer
});


let thunkCreateStore = applyMiddleware(thunk)(createStore);
let Store = thunkCreateStore(reducers);

export default Store;

// 后面有两种不同的异步stroe的生成方法书写习惯

/*
// 这是redux官方demo的写法
export default const store = createStore(
  reducer,
  preloadedState,
  applyMiddleware(...middleware)
)
*/

/*
// 这是redux内部实现的实际过程的写法，applyMiddleware增强createStore，然后在重新执行增强后的createStore
export default (function(initialState) {
    let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
    let store = createStoreWithMiddleware(reducers, initialState);
    return store;
})({});
*/

