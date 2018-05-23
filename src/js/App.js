import React, { Component, Fragment } from 'react';
import Header from "./Header.jsx";
import Sombra from './Sombra';
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
                </Switch>
            </Fragment>
        </Router>
    );
  }
}

export default App;
