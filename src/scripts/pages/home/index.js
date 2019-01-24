/*
 * @Author: weiu.cao
 * @Date: 2018-01-15 17:29:39
 * @Last Modified by: weiju.cao
 * @Last Modified time: 2019-01-24 21:14:37
 */
'use strict';

import 'stylepages/home.scss';

import React from "react";  // eslint-disable-line
import {render} from 'react-dom';
import Store from './store/index.js';
import App from './components/app.js';
import {Provider} from 'react-redux';

render(
    <Provider store = {Store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
