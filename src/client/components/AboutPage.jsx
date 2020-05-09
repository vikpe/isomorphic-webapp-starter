import React from 'react';
import { Helmet } from 'react-helmet';

class AboutPage extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>Isomorphic - About</title>
          <meta name="description" content="Description for about page" />
        </Helmet>
        <h1>About</h1>
        <p>Another page.</p>
      </div>
    );
  }
}

export default AboutPage;
