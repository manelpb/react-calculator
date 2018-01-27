import React from 'react';
import ReactDOM from 'react-dom';

/** redux */
import { Provider } from 'react-redux';

/** App */
import App from './App';
import configureStore from './configureStore';

// setup the store with initial state
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
