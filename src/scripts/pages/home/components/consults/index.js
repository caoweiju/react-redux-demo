'use strict';

// eslint-disable-next-line
import React ,{Component} from "react";  // eslint-disable-line

// 需要使用非容器内的dispacth时需要引入，使用Store.dispacth来分发action
import Store from './../../store/index.js'; // eslint-disable-line
import {connect} from 'react-redux';

const Consults = ({consults}) => {
    return (<div className="m-consults">
        {
            consults.map((v, i) => {
                return (<div className="consults-item">
                    <div className="consults-item-info">
                        <span className="info">{v.name}</span>
                        <span className="info">{v.job}</span>
                        <span className="info">{v.place}</span>
                    </div>
                    <div className="consults-item-data">
                        {v.data}
                    </div>
                </div>);
            })
        }
    </div>);
};

const mapStateToProps = state => {
    let data = state.dataReducer;
    return {
        consults: data.consults
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Consults);

/*

// 不需要mapStateToProps的时候，也不需要mapDispatchToProps，但是需要异步dispatch
export default connect()(Article);

// 只需要mapStateToProps的时候，不需要mapDispatchToProps
export default connect(mapStateToProps)(Article);

// 不需要mapStateToProps的时候，需要mapDispatchToProps
export default connect(null, mapDispatchToProps)(Article);

*/