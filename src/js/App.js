import React, { Component, Fragment } from 'react';
import Header from "./Header.jsx";
import Sombra from './Sombra';
import Chopper from './Chopper';
import SombraCarousel from './SombraCarousel'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = () => (
    <SombraCarousel />
)

class App extends Component {
  render() {
    return (
        <Router>
            <Fragment>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/sombra" exact component={Sombra} />
                    <Route path="/chopper" exact component={Chopper} />
                </Switch>
            </Fragment>
        </Router>
    );
  }
}

export default App;
