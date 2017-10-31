import React from 'react';
import '!style-loader!css-loader!sass-loader!../assets/scss/app.scss';
import reactLogo from '../assets/img/react_logo.svg';
import TodoListContainer from './../containers/TodoListContainer';
import Helmet from 'react-helmet';

class App extends React.PureComponent {
  render() {
    return (
        <div>
          <Helmet>
            <title>Dotbot</title>
            <meta name="description" content="Domain names yo!"/>
          </Helmet>
          <img src={reactLogo} height="120"/>
          <h1>Dotbot</h1>
          <p>Awesome domain market platform.</p>
          <hr/>
          <TodoListContainer/>
        </div>
    );
  }
}

export default App;
