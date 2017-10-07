import React from 'react';
import '!style-loader!css-loader!sass-loader!../assets/scss/App.scss';
import reactLogo from '../assets/img/react_logo.svg';
import TodoListContainer from './../containers/TodoListContainer';

class App extends React.PureComponent {
  render() {
    return (
        <div className="app">
          <img src={reactLogo}/>
          <h1>Isomorphic Webapp Starter</h1>
          <p>Isomorphic web application starter with hot module replacement (HMR) for rapid development.</p>
          <hr/>
          <TodoListContainer/>
        </div>
    );
  }
}

export default App;
