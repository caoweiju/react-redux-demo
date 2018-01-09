'use strict';

// eslint-disable-next-line
import React ,{Component} from "react";  // eslint-disable-line

// 需要使用非容器内的dispacth时需要引入，使用Store.dispacth来分发action
import Store from './../../store/index.js'; // eslint-disable-line
import {connect} from 'react-redux';

const Article = ({tit, subtit, tags, content, author, date}) => {
    return (<div className="m-article">
        <p className="article-tit">{tit}</p>
        <p className="article-subtit">{subtit}</p>
        <div className="article-tags">
            {
                tags.map((v, i) => <span className={'tags' + (i === 0 ? ' first-tag' : '')} key={'key' + i}>{v}</span>)
            }
        </div>
        <div className="article-origin">
            <span className="article-origin-author">{author}</span>
            <span className="article-origin-date">{date}</span>
        </div>
        <div className="article-data">
            {content}
        </div>
    </div>);
};

const mapStateToProps = state => {
    let index = state.indexReducer;
    return {
        tit: index.tit,
        subtit: index.subtit,
        tags: index.tags,
        content: index.content,
        author: index.author,
        date: index.date
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);

/*

// 不需要mapStateToProps的时候，也不需要mapDispatchToProps，但是需要异步dispatch
export default connect()(Article);

// 只需要mapStateToProps的时候，不需要mapDispatchToProps
export default connect(mapStateToProps)(Article);

// 不需要mapStateToProps的时候，需要mapDispatchToProps
export default connect(null, mapDispatchToProps)(Article);

*/