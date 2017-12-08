import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from 'client/components/Root';
import store from 'client/store';

const renderComponent = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component store={store} />
    </AppContainer>,
    document.getElementById('app-root'),
  );
};

renderComponent(Root);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/Root', () => {
    renderComponent(Root);
  });
}
