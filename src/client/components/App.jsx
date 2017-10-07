import React from 'react';

require('!style-loader!css-loader!sass-loader!../assets/scss/App.scss');

const reactLogo = require('../assets/img/react_logo.svg');

class App extends React.PureComponent {
  render() {
    return (
        <div className="app">
          <img src={reactLogo}/>
          <h1>Isomorphic Webapp Starter</h1>          
          <p>Isomorphic web application starter with hot module replacement (HMR) for rapid development.</p>          
        </div>
    );
  }
}

export default App;
