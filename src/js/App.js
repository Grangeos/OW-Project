import React, { Component, Fragment } from 'react';
import Header from "./Header";
import SombraCarousel from './SombraCarousel.js';
import McCree from "./McCree";


class App extends Component {
  render() {
    return (
        <Fragment>
            <Header />
            <SombraCarousel />
            <McCree />
        </Fragment>
    );
  }
}

export default App;
