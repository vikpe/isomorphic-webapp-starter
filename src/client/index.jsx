import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import {AppContainer} from 'react-hot-loader';
import App from './components/App';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
);

const rootEl = document.getElementById('root');

const renderComponent = (Component) => {
  ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <Component/>
        </Provider>
      </AppContainer>,
      rootEl,
  );
};

renderComponent(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NewApp = require('./components/App').default;
    renderComponent(NewApp);
  });
}
