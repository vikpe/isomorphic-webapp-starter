import React from 'react';

require('!style-loader!css-loader!sass-loader!../assets/scss/App.scss');

const reactLogo = require('../assets/img/react_logo.svg');

class App extends React.PureComponent {
  render() {
    return (
        <div className="app">
          <h1>Hello World!</h1>
          <p>Foo to the bar</p>
          <img src={reactLogo}/>
        </div>
    );
  }
}

export default App;
