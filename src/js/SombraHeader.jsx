import React, { Component } from 'react';
import SombraCarousel from './SombraCarousel';
import { Jumbotron, Button, Image } from 'react-bootstrap';
import Sombra from "../scss/picture/SombraPers.jpg";

class SombraHeader extends Component {
  render() {
    return (
        <Jumbotron>
            <h1>Sombra</h1>
            <p>
            Sombra est un personnage qui possède beaucoup de mobilité... Elle est considérée comme ayant un role d'Attaquante...
            </p>
            <p>
                <Image src={ Sombra } thumbnail />
            </p>
        </Jumbotron>

    );
  }
}

export default SombraHeader;
