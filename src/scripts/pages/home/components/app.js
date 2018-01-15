'use strict';

import React, {Component, Fragment} from "react";  // eslint-disable-line

// eslint-disable-next-line
import Store from './../store/index.js'; // 需要使用非容器内的dispacth时需要引入，使用Store.dispacth来分发action
import Article from './article/index.js';
import Consults from './consults/index.js';
import {init} from './../actions/index.js';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        Store.dispatch(init({
            tit: '这是一篇文章的标题',
            subtit: '这是一篇文章的副标题',
            tags: ['科技', '明显', '八卦'],
            content: '这是文章内容..............................',
            author: 'cwj',
            date: '2011-12-12',
            time: 400
        }));
    }
    render() {
        return (<Fragment>
            <Article />
            <Consults />
            <div className="img"> </div>
        </Fragment>);
    }
}
