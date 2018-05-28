import React, { Component, Fragment } from 'react';
import Header from "./Header.jsx";
import McCree from "./McCree";
import Sombra from './Sombra';
import Chopper from './Chopper';
import Junkrat from './Junkrat';
import Lucio from './Lucio';
import Mei from './Mei';
import Hanzo from './Hanzo';

import CarouselHome from './CarouselHome'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = () => (
    <CarouselHome />
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
                    <Route path="/mccree" exact component={McCree} />
                    <Route path="/junkrat" exact component={Junkrat} />
                    <Route path="/lucio" exact component={Lucio} />
                    <Route path="/mei" exact component={Mei} />
                    <Route path="/hanzo" exact component={Hanzo} />
                </Switch>
            </Fragment>
        </Router>
    );
  }
}

export default App;
