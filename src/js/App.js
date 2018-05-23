import React, {Component, Fragment} from 'react';
import Header from "./Header";
import SombraCarousel from './SombraCarousel'
import Chopper from './Chopper'

class App extends Component {
	render() {
		return (
			<Fragment>
				<Header/>
				<SombraCarousel/>
				<Chopper/>
			</Fragment>
		);
	}
}

export default App;
