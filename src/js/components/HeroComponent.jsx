import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from "classnames";
import { ListGroup, ListGroupItem, Jumbotron, Image, Button, Collapse, Well, Row, Col, Carousel} from "react-bootstrap";
import Video from 'react-video-cover';
import map from 'lodash/map';


import BackgroundTabs from "../../scss/picture/ImageBackground.jpg";

class HeroVideo extends Component {
  constructor(props, context) {
    super(props, context);

    this.initialState = props.playing;
  }

  componentWillReceiveProps({ playing }) {
    const { videoRef } = this;

    if (videoRef) {
      if (playing) {
        videoRef.play();
      } else {
        videoRef.pause();
      }
    }
  }

  render() {
    const { src, ...props } = this.props;

    return (
      <Video
        style={{
          objectifFit:'cover',
          width:'100%',
          height:'100%',
          border: "3px white solid",
      }}
      videoOptions={{ src, autoPlay: this.initialState, loop: true, ref: videoRef => this.videoRef = videoRef, muted: true, ...props }}
      />
    );
  }
}

class HeroComponent extends Component {
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

        const { description, pers, videoIntro, nom, age, profession, baseOperation, affiliation, skills, skin, firstskinname} = this.props;
        return(
          <div className="ComposentHero" style={{backgroundImage:`url(${BackgroundTabs})`}}>
            <Jumbotron className="tabs-panel">
              <h1>{pers}</h1>
              <p className="presentation">{description}</p>
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
              videoOptions={{ src:videoIntro, autoPlay: true, loop: true, muted: true}}
              />
              </div>
              <ul className="ListGroup">
                <li>
                  <span  className="glyphicon glyphicon-folder-open icone"> </span>
                  <span> Identité : {nom}, Age : {age} </span>
                </li>
                <li>
                  <span  className="glyphicon glyphicon-briefcase icone"> </span>
                  <span> Profession : {profession} </span>
                 </li>
                <li>
                  <span  className="glyphicon glyphicon-globe icone"> </span>
                  <span> Base d'operation : {baseOperation}</span>
                </li>
                <li>
                  <span  className="glyphicon glyphicon-bookmark icone"> </span>
                  <span> Affiliation : {affiliation}</span>
                </li>
              </ul>
              <hr/>
              <div className="ability">
              <Row className="button">
                  {
                      skills.map(({ img, titre }, i) => (
                          <Col className={ cx({ active: activeTab === i})}>
                              <Button block onClick={() => this.setActiveTab(i)}>
                                  <Image src={img} alt={titre} responsive />
                              </Button>
                          </Col>
                      ))
                  }
              </Row>
              <Row className="desc">
                  {
                      skills.map(({ titre, desc, videodesc }, i) => (
                          <Collapse in={activeTab === i}>
                              <div>
                                  <Well>
                                      <h3>{titre}</h3>
                                      <p>{desc}</p>
                                      <div className="VideoDesc"
                                        style={{
                                          overflow: "hidden",
                                      }}>
                                      <HeroVideo src={videodesc} playing={activeTab === i} />
                                      </div>
                                  </Well>
                              </div>
                          </Collapse>
                      ))
                  }
              </Row>
            </div>
            <hr/>

              <Carousel className="carouselSkin"
                interval={5000}
                pauseOnHover={false}
              >
              {
              skin.map(({ imgskin,skinname }) => (
                <Carousel.Item className="item" style={{backgroundImage:`url(${imgskin})`}}>
                  <Carousel.Caption>
                    <h3> {skinname} </h3>
                  </Carousel.Caption>
                </Carousel.Item>
              ))
              }
              </Carousel>
            </Jumbotron>
          </div>

        );
    }
}
export default HeroComponent;
