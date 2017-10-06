import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './components/App';
import store from './store';

const rootEl = document.getElementById('app-root');

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    rootEl,
);

