import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames'
import {Button, Collapse, Image, Well, Row, Col, Grid, Jumbotron} from 'react-bootstrap';


class Chopper extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			activeTab: 0
		};
	}

	setActiveTab(index) {
		if (this.state.activeTab === index) {
			this.setState({ activeTab: -1 });
		} else {
			this.setState({
				activeTab: index
			});
		}
	}

	render() {
		const { activeTab } = this.state;

		const data = [
			{
				titre: "DÉFERRAILLEUR",
				desc: "Le déferrailleur de Chopper lance du shrapnel à courte portée mais sur une large zone. Sinon il peut lancer une boule de shrapnels qui détone plus loin, éparpillant les fragments métalliques depuis le point d’impact.",
			},
			{
				titre: "INHALATEUR",
				desc: "Chopper récupère une partie de ses points de vie sur une courte période.",
			},
			{
				titre: "TRAQUELARD",
				desc: "Chopper lance sa chaîne vers une cible ; s’il l’attrape, il l’attire à lui, à courte portée.",
			},
			{
				titre: "ÉQUARISSEUR",
				desc: "Après avoir ajouté un chargeur supplémentaire au-dessus de son déferrailleur, Chopper le bourre de munitions. Pendant une courte période, il mitraille une large zone devant lui avec des shrapnels qui repoussent les ennemis.",
			}
		]
		return (

			""
		);
	}
}

export default Chopper;
