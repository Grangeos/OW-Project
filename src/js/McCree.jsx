import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Jumbotron, Image, Button, Collapse, Well} from "react-bootstrap";
import Video from 'react-video-cover';
import McCree1 from '../scss/picture/McCree/Mccree02.jpg';
import iconAbility1 from "../scss/picture/McCree/IconAbility.png";
import iconAbility2 from "../scss/picture/McCree/IconAbility1.png";
import iconAbility3 from "../scss/picture/McCree/IconAbility2.png";
import iconAbility4 from "../scss/picture/McCree/IconAbility3.png";
import BackgroundTabs from "../scss/picture/ImageBackground.jpg";
import McCreeVideo from "../scss/picture/McCree/VideoIntroMcCree.mp4";

class McCree extends Component {
    constructor(props, context) {
     super(props, context);

     this.state = {
       activeTab: -1
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
        return(
          <div className="tabs" style={{backgroundImage:`url(${BackgroundTabs})`}}>
            <Jumbotron className="tabs-panel">
              <h1> McCree </h1>
              <p className="presentation">
                  Armé de son Pacificateur, McCree abat ses cibles avec une précision redoutable et se met à couvert
                  plus vite que son ombre.
              </p>
              <div className="VideoIntro"
                style={{
                  overflow: "hidden",
              }}>
              <Video
                style={{
                  objectifFit:'cover',
                  width:'100%',
                  height:'100%',
                  border: "3px white solid",

              }}
              videoOptions={{ src: McCreeVideo, autoPlay: true, loop: true, muted: true}}
              />
              </div>
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
                  <span> Base d'operation : Santa Fe, Nouveau-Mexique, Etats-Unis </span>
                </li>
                <li>
                  <span  className="glyphicon glyphicon-bookmark icone"> </span>
                  <span> Affiliation : Overwatch ( anciennement ) </span>
                </li>
              </ul>
              <hr/>

              <div className="ability">
              <Button className="buttonAbility" onClick={() => this.setActiveTab(0)}>
                <Image className="iconAbility" src= { iconAbility1 } />
              </Button>
              <Collapse in={activeTab === 0}>
                <div>
                  <Well>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt sapiente
                    ea proident.
                  </Well>
                </div>
              </Collapse>
              <Button className="buttonAbility" onClick={() => this.setActiveTab(1)}>
                <Image className="iconAbility" src= { iconAbility2 } />
              </Button>
              <Collapse in={activeTab === 1}>
                <div>
                  <Well>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt sapiente
                    ea proident.
                  </Well>
                </div>
              </Collapse>
              <Button className="buttonAbility" onClick={() => this.setActiveTab(2)}>
                <Image className="iconAbility" src= { iconAbility3 } />
              </Button>
              <Collapse in={activeTab === 2}>
                <div>
                  <Well>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt sapiente
                    ea proident.
                  </Well>
                </div>
              </Collapse>
              <Button className="buttonAbility" onClick={() => this.setActiveTab(3)}>
                <Image className="iconAbility" src= { iconAbility4 } />
              </Button>
              <Collapse in={activeTab === 3}>
                <div>
                  <Well>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt sapiente
                    ea proident.
                  </Well>
                </div>
              </Collapse>
            </div>
            </Jumbotron>
          </div>

        );
    }
}
export default McCree;
