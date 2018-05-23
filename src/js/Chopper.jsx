import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Button, Collapse, Image, Well, Row, Col, Grid} from 'react-bootstrap';

import Arme from '../scss/picture/Armechopper.png';
import Healchopper from '../scss/picture/Healchopper.png';
import Grapchopper from '../scss/picture/Grapchopper.png';
import Ultchopper from '../scss/picture/Ultchopper.png';

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

		return (

			<section className="container chopper">
			<Row>
				<Collapse in={activeTab === 0}>
					<div>
						<Well>
							<p>DÉFERRAILLEUR</p>
							<p>Le déferrailleur de Chopper lance du shrapnel à courte portée mais sur une large zone. Sinon il peut lancer une boule de shrapnels qui détone plus loin, éparpillant les fragments métalliques depuis le point d’impact.</p>
						</Well>
					</div>
				</Collapse>
				<Collapse in={activeTab === 1}>
					<div>
						<Well>
							<p>INHALATEUR</p>
							<p>Chopper récupère une partie de ses points de vie sur une courte période.</p>
						</Well>
					</div>
				</Collapse>
				<Collapse in={activeTab === 2}>
					<div>
						<Well>
							<p>TRAQUELARD</p>
							<p>Chopper lance sa chaîne vers une cible ; s’il l’attrape, il l’attire à lui, à courte portée.</p>
						</Well>
					</div>
				</Collapse>
				<Collapse in={activeTab === 3}>
					<div>
						<Well>
							<p>ÉQUARISSEUR</p>
							<p>Après avoir ajouté un chargeur supplémentaire au-dessus de son déferrailleur, Chopper le bourre de munitions. Pendant une courte période, il mitraille une large zone devant lui avec des shrapnels qui repoussent les ennemis.</p>
						</Well>
					</div>
				</Collapse>
			</Row>
			<Row>
				<Col xs={2}>
					<Button block onClick={() => this.setActiveTab(0)}>
						<Image src={Arme} alt="Arme" responsive="responsive"/>
					</Button>
				</Col>

				<Col xs={2}>
					<Button block onClick={() => this.setActiveTab(1)}>
						<Image src={Healchopper} alt="Healchopper" responsive="responsive"/>
					</Button>
				</Col>

				<Col xs={2}>
					<Button block onClick={() => this.setActiveTab(2)}>
						<Image src={Grapchopper} alt="Grapchopper" responsive="responsive"/>
					</Button>
				</Col>

				<Col xs={2}>
					<Button block onClick={() => this.setActiveTab(3)}>
						<Image src={Ultchopper} alt="Ultchopper" responsive="responsive"/>
					</Button>
				</Col>

			</Row>
			</section>
		);
	}
}

export default Chopper;
