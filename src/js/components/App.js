import React, { Component, Fragment } from 'react';
import Header from "./Header.jsx";
import McCree from "./McCree";
import Sombra from './Sombra';
import Chopper from './Chopper';
import Junkrat from './Junkrat';
import Lucio from './Lucio';
import Tracer from './Tracer';
import Reaper from './Reaper';
import Mei from './Mei';
import Hanzo from './Hanzo';
import Mercy from './Mercy';
import Doomfist from './Doomfist';
import Genji from './Genji';
import Pharah from './Pharah';
import Soldier from './Soldier';
import Bastion from './Bastion';
import Torbjorn from './Torbjorn';
import Fatale from './Fatale';
import Dva from './Dva';
import Orisa from './Orisa';
import Reinhardt from './Reinhardt';
import Winston from './Winston';
import Zarya from './Zarya';
import Brigitte from './Brigitte';
import Anna from './Anna';
import Moira from './Moira';
import Symmetra from './Symmetra';
import Zenyatta from './Zenyatta';
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
                    <Route path="/tracer" exact component={Tracer} />
                    <Route path="/reaper" exact component={Reaper} />
                    <Route path="/mei" exact component={Mei} />
                    <Route path="/hanzo" exact component={Hanzo} />
                    <Route path="/mercy" exact component={Mercy} />
                    <Route path="/doomfist" exact component={Doomfist} />
                    <Route path="/genji" exact component={Genji} />
                    <Route path="/pharah" exact component={Pharah} />
                    <Route path="/soldier" exact component={Soldier} />
                    <Route path="/bastion" exact component={Bastion} />
                    <Route path="/torbjorn" exact component={Torbjorn} />
                    <Route path="/fatale" exact component={Fatale} />
                    <Route path="/dva" exact component={Dva} />
                    <Route path="/orisa" exact component={Orisa} />
                    <Route path="/reinhardt" exact component={Reinhardt} />
                    <Route path="/winston" exact component={Winston} />
                    <Route path="/zarya" exact component={Zarya} />
                    <Route path="/brigitte" exact component={Brigitte} />
                    <Route path="/anna" exact component={Anna} />
                    <Route path="/moira" exact component={Moira} />
                    <Route path="/symmetra" exact component={Symmetra} />
                    <Route path="/zenyatta" exact component={Zenyatta} />
                </Switch>
            </Fragment>
        </Router>
    );
  }
}

export default App;
