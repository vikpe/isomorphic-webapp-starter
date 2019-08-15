import 'client/assets/scss/app.scss';
import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import StartPage from 'client/components/StartPage';
import AboutPage from 'client/components/AboutPage';

class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <div className="app">
          <Link to="/">Home</Link>
          &nbsp;- <Link to="/about">About</Link>
          <hr />
          <Route exact path="/" component={StartPage} />
          <Route exact path="/about" component={AboutPage} />
        </div>
      </Router>
    );
  }
}

export default hot(module)(App);
