import React, { Component } from 'react';
import { Carousel, Caption, Item } from 'react-bootstrap';
import sombra01 from '../scss/picture/sombra01.jpg';
import sombra02 from '../scss/picture/sombra02.jpg';
import sombra03 from '../scss/picture/sombra03.jpg';

class SombraCarousel extends Component {
    render() {
        return(
            <section>
                <Carousel
                interval={1000}
                pauseOnHover={false}
                >
                    <Carousel.Item style={{backgroundImage:`url(${sombra01})`}}>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{backgroundImage:`url(${sombra02})`}}>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{backgroundImage:`url(${sombra03})`}}>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                </Carousel>

            </section>

        );
    }
}

export default SombraCarousel;
