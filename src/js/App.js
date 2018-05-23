import React, { Component, Fragment } from 'react';
import Header from "./Header.jsx";
import SombraCarousel from './SombraCarousel'
import Chopper from './Chopper'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
            <Fragment>
                <Header />
                <Switch>
                    <Route path="/sombra" exact component={SombraCarousel} />
					<Route path="/chopper" exact component={Chopper} />
                </Switch>
            </Fragment>
        </Router>
    );
  }
}

export default App;
