import React, { Component, Fragment } from 'react';
import Header from "./Header.jsx";
import McCree from "./McCree";
import Sombra from './Sombra';
import Chopper from './Chopper';
import Junkrat from './Junkrat';
import Lucio from './Lucio';
import Reaper from './Reaper';
import Mei from './Mei';
import Hanzo from './Hanzo';
import Mercy from './Mercy';
import Doomfist from './Doomfist';
import Genji from './Genji';
import Pharah from './Pharah';
import CarouselHome from './CarouselHome';

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
                    <Route path="/reaper" exact component={Reaper} />
                    <Route path="/mei" exact component={Mei} />
                    <Route path="/hanzo" exact component={Hanzo} />
                    <Route path="/mercy" exact component={Mercy} />
                    <Route path="/doomfist" exact component={Doomfist} />
                    <Route path="/genji" exact component={Genji} />
                    <Route path="/pharah" exact component={Pharah} />
                </Switch>
            </Fragment>
        </Router>
    );
  }
}

export default App;
