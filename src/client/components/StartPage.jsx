import React from 'react';
import reactLogo from 'client/assets/img/react_logo.svg';
import TodoListContainer from 'client/containers/TodoListContainer';
import { Helmet } from 'react-helmet';

class StartPage extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>Isomorphic - Start</title>
          <meta name="description" content="Description for start page" />
        </Helmet>
        <img src={reactLogo} height="120" />
        <h1>Isomorphic Webapp Starter</h1>
        <p>
          Isomorphic web application starter with hot module replacement (HMR)
          for rapid development.
        </p>
        <hr />
        <TodoListContainer />
      </div>
    );
  }
}

export default StartPage;
