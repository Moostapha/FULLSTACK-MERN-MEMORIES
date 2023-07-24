import React from 'react';
import ReactDOM  from 'react-dom';

// Store Redux initialize

// provider keep track of the global state store and make it available aceesible in all the app
import { Provider } from 'react-redux';

// imports to create redux store
import { legacy_createStore as createStore} from 'redux'
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// import from individual reducers/index.js
import reducers from './reducers/indexReducer';

import App from './App';

// src/index.css linked in index.js
import './index.css'

// redux store settings
const store = createStore(
    reducers, 
    compose(applyMiddleware(thunk))
)


ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
