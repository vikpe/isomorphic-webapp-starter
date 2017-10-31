import React from 'react';
import '!style-loader!css-loader!sass-loader!../assets/scss/app.scss';
import StartPage from './StartPage';

class App extends React.PureComponent {
  render() {
    return (
        <div className="app">
          <StartPage/>
        </div>
    );
  }
}

export default App;
