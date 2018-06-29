import React, { Component } from 'react';
import { Jumbotron, Row, Col, Collapse} from 'react-bootstrap';
import team1 from "../../scss/picture/Team/Valient.svg";
import ReactSVG from "react-svg";
import backgroundLeague from "../../scss/picture/imageBackgroundLeague.jpg"

class OWLeague extends Component {
  constructor(props, context){
      super(props,context);

      this.state = {
        activeTab: -1,
      };
  }

  setActiveTab(index) {
    if (this.state.activeTab === index) {
      this.setState({activeTab: -1});
    } else {
      this.setState ({
        activeTab: index
      });
    }
  }
  render () {
    const league = [
      {
        imgTeam:team1,
        teamName:"Los Angeles Valient",
        city:"Los Angeles",
      },
      {
        imgTeam:team1,
        teamName:"Los Angeles Valient",
        city:"Los Angeles",
      },
      {

      },
      {

      }
    ]

    const { activeTab } = this.state;

    return (
      <Row className="OwLeague" style={{backgroundImage:`url(${backgroundLeague})`}}>
        {
          league.map(({imgTeam, teamName, city }, i) => (
            <Col xs={3}>
            <Jumbotron className="containeurTeam">
              <div className="aze">
                <ReactSVG className="imgTeam" path={imgTeam}  svgStyle={{ width: 280, height: 280}}/>
                <h3> {teamName} </h3>
                <p> {city} </p>
              </div>
              <hr/>
              <h4 className="seeMore" onClick={() => this.setActiveTab(i)}>
               Voir plus d'informations
               <i class="fa fa-chevron-down" aria-hidden="true"></i>
              </h4>
            </Jumbotron>
            <Collapse in={activeTab === i}>
              <div>
                <Jumbotron className="conteneurCollapse">
                  <ReactSVG path={imgTeam}  svgStyle={{ width: 80, height: 80}}/>
                  <h4> {teamName} </h4>
                </Jumbotron>
              </div>
            </Collapse>
            </Col>
          ))
        }
      </Row>

    );
  }
}

export default OWLeague;
