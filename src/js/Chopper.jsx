import React, {Component} from 'react';
import {ToggleButtonGroup, ToggleButton} from 'react-bootstrap';

class Chopper extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.handleChange = this.handleChange.bind(this);

		this.state = {
			value: []
		};
	}

	handleChange(e) {
		this.setState({value: e});
	}

	render() {
		return (
			<section className="container">
				<ToggleButtonGroup type="checkbox" value={this.state.value} onChange={this.handleChange} justified="justified">
					<ToggleButton value={1}>DÉFERRAILLEUR</ToggleButton>
					<ToggleButton value={2}>INHALATEUR</ToggleButton>
					<ToggleButton value={3}>TRAQUELARD</ToggleButton>
					<ToggleButton value={4}>ÉQUARISSEUR</ToggleButton>
				</ToggleButtonGroup>
			</section>
		);
	}
}

export default Chopper;
