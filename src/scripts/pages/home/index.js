'use strict';

import ReactDOM from 'react-dom';
import Store from './store/index.js';
import App from './components/index.js';
import {Provider} from 'react-redux';

ReactDOM.render(
    <Provider store = {Store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
