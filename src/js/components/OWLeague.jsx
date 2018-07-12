import React, { Component } from 'react';
import { Jumbotron, Row, Col, Collapse} from 'react-bootstrap';

import valientLogo from "../../scss/picture/Team/Valient/Valient.svg";
import valientImg from "../../scss/picture/Team/Valient/imgValient.svg";
import valientTeamSkin from "../../scss/picture/Team/Valient/teamSkin.jpg";

import gladiatorsLogo from "../../scss/picture/Team/Gladiators/Gladiators.svg";
import gladiatorsImg from "../../scss/picture/Team/Gladiators/imgGladiators.svg";
import gladiatorsTeamSkin from "../../scss/picture/Team/Gladiators/teamSkin.jpg";


import fusionLogo from "../../scss/picture/Team/Fusion/Fusion.svg";
import fusionImg from "../../scss/picture/Team//Fusion/imgFusion.svg";
import fusionTeamSkin from "../../scss/picture/Team/Fusion/teamSkin.jpg";

import fuelLogo from "../../scss/picture/Team/Fuel/Fuel.svg";
import fuelImg from "../../scss/picture/Team//Fuel/imgFuel.svg";
import fuelTeamSkin from "../../scss/picture/Team/Fuel/teamSkin.jpg";


import ReactSVG from "react-svg";
import backgroundLeague from "../../scss/picture/imageBackgroundLeague.jpg";
import cx from 'classnames';


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
    const dataLeague = [
      {
        logoTeam:valientLogo,
        teamName:"Los Angeles Valient",
        city:"Los Angeles",
        imgTeam:valientImg,
        lieu:"Los Angeles, CA",
        division:"Pacifique",
        classement:"#2",
        resultats:"27V - 13D",
        teamSkin:valientTeamSkin,
        color: "#4A7729",
      },
      {
        logoTeam:gladiatorsLogo,
        teamName:"Los Angeles Gladiators",
        city:"Los Angeles",
        imgTeam:gladiatorsImg,
        lieu:"Los Angeles, CA",
        division:"Pacifique",
        classement:"#4",
        resultats:"25V - 15D",
        teamSkin:gladiatorsTeamSkin,
        color : "#3D1752",
      },
      {
        logoTeam:fusionLogo,
        teamName:"Philadelphia Fusion",
        city:"Philadelphia",
        imgTeam:fusionImg,
        lieu:"Philadelphia, PA",
        division:"Atlantique",
        classement:"#6",
        resultats:"24V - 16D",
        teamSkin:fusionTeamSkin,
        color: "#E88F17",
      },
      {
        logoTeam:fuelLogo,
        teamName:"Dallas Fuel",
        city:"Dallas",
        imgTeam:fuelImg,
        lieu:"Dallas, TX",
        division:"Pacifique",
        classement:"#10",
        resultats:"12V - 28D",
        teamSkin:fuelTeamSkin,
        color: "#091E39",
      },
      {
        logoTeam:fuelLogo,
        teamName:"Dallas Fuel",
        city:"Dallas",
        imgTeam:fuelImg,
        lieu:"Dallas, TX",
        division:"Pacifique",
        classement:"#10",
        resultats:"12V - 28D",
        teamSkin:fuelTeamSkin,
        color: "#091E39",
      },
      {
        logoTeam:fuelLogo,
        teamName:"Dallas Fuel",
        city:"Dallas",
        imgTeam:fuelImg,
        lieu:"Dallas, TX",
        division:"Pacifique",
        classement:"#10",
        resultats:"12V - 28D",
        teamSkin:fuelTeamSkin,
        color: "#091E39",
      },
      {
        logoTeam:fuelLogo,
        teamName:"Dallas Fuel",
        city:"Dallas",
        imgTeam:fuelImg,
        lieu:"Dallas, TX",
        division:"Pacifique",
        classement:"#10",
        resultats:"12V - 28D",
        teamSkin:fuelTeamSkin,
        color: "#091E39",
      },
      {
        logoTeam:fuelLogo,
        teamName:"Dallas Fuel",
        city:"Dallas",
        imgTeam:fuelImg,
        lieu:"Dallas, TX",
        division:"Pacifique",
        classement:"#10",
        resultats:"12V - 28D",
        teamSkin:fuelTeamSkin,
        color: "#091E39",
      }
    ]

    const { activeTab } = this.state;

    return (
      <div className="OwLeague" style={{backgroundImage:`url(${backgroundLeague})`}}>
        {
          dataLeague.map(({logoTeam, teamName, city, imgTeam, lieu, division, classement, resultats, teamSkin, color }, i) => (
            <div className="blockTeam" key={i}>
              <Jumbotron className="containeurTeam">
                <div className="jumTop">
                  <ReactSVG className="imgTeam" path={logoTeam}  svgStyle={{ width: 280, height: 280}}/>
                  <h3> {teamName} </h3>
                  <p> {city} </p>
                </div>
                <hr/>
                <h4 className="seeMore" onClick={() => this.setActiveTab(i)}>
                 Voir plus d'informations
                 <span className={cx("glyphicon glyphicon-chevron-right chevron", {activeTab})}> </span>
                </h4>
              </Jumbotron>
              <Collapse in={activeTab === i}>
                <div>
                  <Jumbotron className="jumbTeam">
                    <div className="conteneurCollapse" style={{ backgroundColor: color }}>
                      <ReactSVG path={imgTeam}z svgStyle={{ width: 280, height: 280}}/>
                      <div className="infoTeam">
                        <div>
                          <h4> Lieu </h4>
                          <h3> {lieu} </h3>
                        </div>
                        <div>
                          <h4> Division </h4>
                          <h3> {division} </h3>
                        </div>
                        <div>
                          <h4> Classement ligue </h4>
                          <h3> {classement} </h3>
                        </div>
                        <div>
                          <h4> Resultats </h4>
                          <h3> {resultats} </h3>
                        </div>
                      </div>
                      <div className="separation"/>
                      <div className="joueurs">
                        <div>
                          <h3> monsieur blabla </h3>
                          <p> blabla monsieur </p>
                        </div>
                        <div>
                          <h3> monsieur blabla </h3>
                          <p> blabla monsieur </p>
                        </div>
                        <div>
                          <h3> monsieur blabla </h3>
                          <p> blabla monsieur </p>
                        </div>
                        <div>
                          <h3> monsieur blabla </h3>
                          <p> blabla monsieur </p>
                        </div>
                      </div>
                      </div>
                      <div className="conteneurImage">
                      <img className="teamSkin" src={teamSkin}  />
                      </div>
                    </Jumbotron>
                  </div>
              </Collapse>
            </div>
          ))
        }
      </div>

    );
  }
}

export default OWLeague;
