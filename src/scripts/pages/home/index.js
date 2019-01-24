/*
 * @Author: weiu.cao
 * @Date: 2018-01-15 17:29:39
 * @Last Modified by: weiju.cao
 * @Last Modified time: 2018-04-03 19:56:25
 */
'use strict';

import 'stylepages/home.scss';

import React from "react";  // eslint-disable-line
import {render} from 'react-dom';
import Store from './store/index.js';
import App from './components/app.js';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

// const AppRedux = <Provider store = {Store}>
//     <App />
// </Provider>;

render(
    <BrowserRouter>
        <Provider store = {Store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('app')
);
