'use strict';

import React, {Component, Fragment} from "react";  // eslint-disable-line
import {Link} from 'react-router-dom';

export default class RoutePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
    }
    render() {
        return (<Fragment>
            <div className="test">
                this is test page1 router<br/>
                this is test page2 router<br/>
                this is test page3 router<br/>
                this is test page3 router<br/>
                this is test page3 router<br/>
                this is test page3 router<br/>
                <Link to="/">tolink</Link>
            </div>
        </Fragment>);
    }
}
