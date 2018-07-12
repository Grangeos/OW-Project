import React, { Component, Fragment } from 'react';
import Header from "./Header.jsx";
import McCree from "./Attaquant/McCree";
import Sombra from './Attaquant/Sombra';
import Chopper from './Tank/Chopper';
import Junkrat from './Defence/Junkrat';
import Lucio from './Soutient/Lucio';
import Tracer from './Attaquant/Tracer';
import Reaper from './Attaquant/Reaper';
import Mei from './Defence/Mei';
import Hanzo from './Defence/Hanzo';
import Mercy from './Soutient/Mercy';
import Doomfist from './Attaquant/Doomfist';
import Genji from './Attaquant/Genji';
import Pharah from './Attaquant/Pharah';
import Soldier from './Attaquant/Soldier';
import Bastion from './Defence/Bastion';
import Torbjorn from './Defence/Torbjorn';
import Fatale from './Defence/Fatale';
import Dva from './Tank/Dva';
import Orisa from './Tank/Orisa';
import Reinhardt from './Tank/Reinhardt';
import Winston from './Tank/Winston';
import Zarya from './Tank/Zarya';
import Brigitte from './Soutient/Brigitte';
import Anna from './Soutient/Anna';
import Moira from './Soutient/Moira';
import Symmetra from './Soutient/Symmetra';
import Zenyatta from './Soutient/Zenyatta';
import CarouselHome from './CarouselHome';
import OwLeague from './OWLeague';

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
                    <Route path="/League" exact component={OwLeague} />
                </Switch>
            </Fragment>
        </Router>
    );
  }
}

export default App;
