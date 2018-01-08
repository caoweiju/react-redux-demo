'use strict';

// eslint-disable-next-line
import React ,{Component} from "react";  // eslint-disable-line

import Store from './../store/index.js'; // 需要使用非容器内的dispacth时需要引入，使用Store.dispacth来分发action
import {Article} from './article/index.js';
import {Consults} from './consults/index.js';
import {connect} from 'react-redux';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return 
    }
}
