'use strict';

import React, {Component, Fragment} from "react";  // eslint-disable-line


export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
    }
    render() {
        return (<Fragment>
            <div className="test">
                this is test page1<br/>
                this is test page2<br/>
                this is test page3<br/>
            </div>
        </Fragment>);
    }
}
