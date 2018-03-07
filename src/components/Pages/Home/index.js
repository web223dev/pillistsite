import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './style/styles.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default Home;