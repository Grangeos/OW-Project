import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Jumbotron, Image} from "react-bootstrap";
import McCree1 from '../scss/picture/Mccree02.jpg';

class McCree extends Component {
    render() {
        return(
          <div className="tabs">
            <Jumbotron className="tabs-panel">
              <h1> Presentation  </h1>
              <p className="presentation">
                  Armé de son Pacificateur, McCree abat ses cibles avec une précision redoutable et se met à couvert
                  plus vite que son ombre.
              </p>
              <Image className="imgMcCree" src={ McCree1 } rounded />
              <ul className="ListGroup">
                <li>
                  <span  className="glyphicon glyphicon-folder-open icone"> </span>
                  <span> Identité : Jesse McCree, Age : 37ans </span>
                </li>
                <li>
                  <span  className="glyphicon glyphicon-briefcase icone"> </span>
                  <span> Profession : Chasseur de prime </span>
                 </li>
                <li>
                  <span  className="glyphicon glyphicon-globe icone"> </span>
                  <span> Base d'operation : Santa Fe, Nouveau-Mexique, Etat-Unis </span>
                </li>
                <li>
                  <span  className="glyphicon glyphicon-bookmark icone"> </span>
                  <span> Affiliation : Overwatch ( anciennement ) </span>
                </li>
              </ul>
            </Jumbotron>
          </div>

        );
    }
}
export default McCree;
