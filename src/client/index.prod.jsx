import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'client/components/Root';
import store from 'client/store';

ReactDOM.render(<Root store={store} />, document.getElementById('app-root'));
