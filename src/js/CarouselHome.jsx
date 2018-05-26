import React, { Component } from 'react';
import { Carousel, Caption, Item } from 'react-bootstrap';
import sombra from '../scss/picture/Sombra/sombra.jpg';
import chopper from '../scss/picture/chopper.jpg';
import mccree from '../scss/picture/McCree/mccree.jpg';
import leftRight from "../scss/picture/arrow.png";

class CarouselHome extends Component {
    render() {
        return(
            <section>
                <Carousel
                interval={5000}
                pauseOnHover={false}
                prevIcon={<img src={leftRight} />}
                nextIcon={<img src={leftRight} />}
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

                </Carousel>

            </section>

        );
    }
}

export default CarouselHome;
