import React, { Component } from 'react';
import { Carousel, Caption, Item } from 'react-bootstrap';
import sombra from '../../scss/picture/Sombra/sombra.jpg';
import chopper from '../../scss/picture/chopper.jpg';
import mccree from '../../scss/picture/McCree/mccree.jpg';
import lucio from '../../scss/picture/Lucio/lucio.jpg';
import tracer from '../../scss/picture/Tracer/tracer.jpg';
import junkrat from '../../scss/picture/Junkrat/junkrat.jpg';
import reaper from '../../scss/picture/Reaper/reaper.jpg';
import mei from '../../scss/picture/Mei/mei.jpg';
import hanzo from '../../scss/picture/Hanzo/hanzo.png';
import mercy from '../../scss/picture/Mercy/mercy.jpg';
import doomfist from '../../scss/picture/Doomfist/doomfist.jpg';
import genji from '../../scss/picture/Genji/genji.jpg';
import pharah from '../../scss/picture/Pharah/pharah.jpg';
import soldier from '../../scss/picture/Soldier/soldier.jpg';
import bastion from '../../scss/picture/Bastion/bastion.jpg';
import torbjorn from '../../scss/picture/Torbjorn/torbjorn.png';
import fatale from '../../scss/picture/Fatale/fatale.jpg';
import dva from '../../scss/picture/Dva/dva.jpg';
import orisa from '../../scss/picture/Orisa/orisa.jpg';
import reinhardt from '../../scss/picture/Reinhardt/reinhardt.jpg';
import winston from '../../scss/picture/Winston/winston.jpg';
import zarya from '../../scss/picture/Zarya/zarya.jpg';
import brigitte from '../../scss/picture/Brigitte/brigitte.jpg';
import anna from '../../scss/picture/Anna/anna.jpg';
import moira from '../../scss/picture/Moira/moira.jpg';
import symmetra from '../../scss/picture/Symmetra/symmetra.jpg';
import zenyatta from '../../scss/picture/Zenyatta/zenyatta.jpg';
import leftRight from "../../scss/picture/arrow.png";

class CarouselHome extends Component {
    render() {
        return(
            <section>
                <Carousel className="carouselHome"
                interval={5000}
                pauseOnHover={false}
                prevIcon={<img src={leftRight} alt="leftArrow"/>}
                nextIcon={<img src={leftRight} alt="rightArrow"/>}
                >
                    <Carousel.Item style={{backgroundImage:`url(${sombra})`}}>
                        <Carousel.Caption>
                            <h3>Sombra</h3>
                            <p>Edited by Grangeos</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{backgroundImage:`url(${chopper})`}}>
                        <Carousel.Caption>
                            <h3>Chopper</h3>
                            <p>Edited by Tibomat</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{backgroundImage:`url(${mccree})`}}>
                        <Carousel.Caption>
                            <h3>McCree</h3>
                            <p>Edited by NeiiKo</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{backgroundImage:`url(${junkrat})`}}>
                        <Carousel.Caption>
                            <h3>Chacal</h3>
                            <p>Edited by NeiiKo</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{backgroundImage:`url(${lucio})`}}>
                        <Carousel.Caption>
                            <h3>Lucio</h3>
                            <p>Edited by NeiiKo</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{backgroundImage:`url(${tracer})`}}>
                        <Carousel.Caption>
                            <h3>Tracer</h3>
                            <p>Edited by NeiiKo</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{backgroundImage:`url(${reaper})`}}>
                        <Carousel.Caption>
                            <h3>Faucheur</h3>
                            <p>Edited by NeiiKo</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{backgroundImage:`url(${hanzo})`}}>
                        <Carousel.Caption>
                            <h3>Hanzo</h3>
                            <p>Edited by NeiiKo</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{backgroundImage:`url(${mei})`}}>
                        <Carousel.Caption>
                            <h3>Mei</h3>
                            <p>Edited by NeiiKo</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{backgroundImage:`url(${mercy})`}}>
                        <Carousel.Caption>
                            <h3>Ange</h3>
                            <p>Edited by NeiiKo</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{backgroundImage:`url(${doomfist})`}}>
                        <Carousel.Caption>
                            <h3>Doomfist</h3>
                            <p>Edited by NeiiKo</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{backgroundImage:`url(${genji})`}}>
                      <Carousel.Caption>
                       <h3>Genji</h3>
                       <p>Edited by NeiiKo</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  <Carousel.Item style={{backgroundImage:`url(${pharah})`}}>
                        <Carousel.Caption>
                            <h3>Pharah</h3>
                            <p>Edited by NeiiKo</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                  <Carousel.Item style={{backgroundImage:`url(${bastion})`}}>
                          <Carousel.Caption>
                              <h3>Bastion</h3>
                              <p>Edited by NeiiKo</p>
                          </Carousel.Caption>
                      </Carousel.Item>
                    <Carousel.Item style={{backgroundImage:`url(${torbjorn})`}}>
                          <Carousel.Caption>
                              <h3>Torbjorn</h3>
                              <p>Edited by NeiiKo</p>
                          </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item style={{backgroundImage:`url(${fatale})`}}>
                            <Carousel.Caption>
                                <h3>Fatale</h3>
                                <p>Edited by NeiiKo</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item style={{backgroundImage:`url(${dva})`}}>
                            <Carousel.Caption>
                                <h3>D.Va</h3>
                                <p>Edited by NeiiKo</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item style={{backgroundImage:`url(${orisa})`}}>
                            <Carousel.Caption>
                                <h3>Orisa</h3>
                                <p>Edited by NeiiKo</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item style={{backgroundImage:`url(${reinhardt})`}}>
                            <Carousel.Caption>
                                <h3>Reinhardt</h3>
                                <p>Edited by NeiiKo</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item style={{backgroundImage:`url(${winston})`}}>
                            <Carousel.Caption>
                                <h3>Winston</h3>
                                <p>Edited by NeiiKo</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item style={{backgroundImage:`url(${zarya})`}}>
                            <Carousel.Caption>
                                <h3>Zarya</h3>
                                <p>Edited by NeiiKo</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item style={{backgroundImage:`url(${brigitte})`}}>
                            <Carousel.Caption>
                                <h3>Brigitte</h3>
                                <p>Edited by NeiiKo</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item style={{backgroundImage:`url(${anna})`}}>
                            <Carousel.Caption>
                                <h3>Anna</h3>
                                <p>Edited by NeiiKo</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item style={{backgroundImage:`url(${moira})`}}>
                            <Carousel.Caption>
                                <h3>Moira</h3>
                                <p>Edited by NeiiKo</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item style={{backgroundImage:`url(${symmetra})`}}>
                            <Carousel.Caption>
                                <h3>Symmetra</h3>
                                <p>Edited by NeiiKo</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item style={{backgroundImage:`url(${zenyatta})`}}>
                            <Carousel.Caption>
                                <h3>Zenyatta</h3>
                                <p>Edited by NeiiKo</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                </Carousel>
            </section>

        );
    }
}

export default CarouselHome;
