import React, { PureComponent } from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';
import HomePage from 'containers/HomePage';


class App extends PureComponent {
  render() {
    return (
      <div className="main">
        <Header />
        <HomePage />
        <Footer />
      </div>
    );
  }
}

export default App;
