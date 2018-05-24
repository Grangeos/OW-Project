import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames'
import {Button, Collapse, Image, Well, Row, Col, Grid, Jumbotron} from 'react-bootstrap';

import Arme from '../scss/picture/Armechopper.png';
import Healchopper from '../scss/picture/Healchopper.png';
import Grapchopper from '../scss/picture/Grapchopper.png';
import Ultchopper from '../scss/picture/Ultchopper.png';
import ChopperArme from '../scss/picture/ChopperArme.png';
import TakeBreather from '../scss/picture/TakeBreather.png';
import ChopperGrap from '../scss/picture/ChopperGrap.png';
import ChopperUlt from '../scss/picture/ChopperUlt.png';
import ChopperFiche from '../scss/picture/ChopperFiche.png';

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
				img: Arme,
				titre: "DÉFERRAILLEUR",
				desc: "Le déferrailleur de Chopper lance du shrapnel à courte portée mais sur une large zone. Sinon il peut lancer une boule de shrapnels qui détone plus loin, éparpillant les fragments métalliques depuis le point d’impact.",
				imgdesc: ChopperArme
			},
			{
				img: Healchopper,
				titre: "INHALATEUR",
				desc: "Chopper récupère une partie de ses points de vie sur une courte période.",
				imgdesc: TakeBreather
			},
			{
				img: Grapchopper,
				titre: "TRAQUELARD",
				desc: "Chopper lance sa chaîne vers une cible ; s’il l’attrape, il l’attire à lui, à courte portée.",
				imgdesc: ChopperGrap
			},
			{
				img: Ultchopper,
				titre: "ÉQUARISSEUR",
				desc: "Après avoir ajouté un chargeur supplémentaire au-dessus de son déferrailleur, Chopper le bourre de munitions. Pendant une courte période, il mitraille une large zone devant lui avec des shrapnels qui repoussent les ennemis.",
				imgdesc: ChopperUlt
			}
		]
		return (

			<section className="container chopper">
				<Row className="desc">
					{
						data.map(({ titre, desc, imgdesc }, i) => (
							<Collapse in={activeTab === i}>
								<div>
									<Well>
										<h3>{titre}</h3>
										<p>{desc}</p>
										<Image src={imgdesc} alt={titre} responsive="responsive"/>
									</Well>
								</div>
							</Collapse>
						))
					}
				</Row>
				<Row className="button">
					{
						data.map(({ img, titre }, i) => (
							<Col className={ cx({ active: activeTab === i})}>
								<Button block onClick={() => this.setActiveTab(i)}>
									<Image src={img} alt={titre} responsive="responsive"/>
								</Button>
							</Col>
						))
					}
				</Row>
				<Jumbotron>
					<h2>Chopper</h2>
					<p>Avec son emblématique traquelard, Chopper attrape et attire ses ennemis avant de les réduire en miettes d’un coup de déferrailleur. Il est assez robuste pour survivre à de lourds dégâts, et peut récupérer ses points de vie grâce à son inhalateur.</p>
				</Jumbotron>
			</section>
		);
	}
}

export default Chopper;
