import React, { Component } from 'react';
import SombraCarousel from './SombraCarousel';
import { Jumbotron, Button, Image } from 'react-bootstrap';
import Sombra from "../scss/picture/Sombra/SombraPers.jpg";
import SombraVideo from '../scss/picture/Sombra/intro-video.mp4';
import Video from 'react-video-cover';

class SombraHeader extends Component {
  render() {
    return (
        <section className="wrapperHeaderSombra">
            <Jumbotron>
                <h1>Sombra</h1>
                <p>
                Sombra est un personnage qui possède beaucoup de mobilité... Elle est considérée comme ayant un role d'Attaquante...
                </p>
                <div className="videoPlayer"
                style={{
                    overflow: 'hidden',
                }}>

                <Video
                    style={{
                      objectFit: 'cover',
                      width: '100%',
                      height: '100%',
                      border: '3px solid white',
                    }}
                    videoOptions={{ src: SombraVideo, autoPlay: true, loop: true }}
                />

                </div>
            </Jumbotron>
        </section>
    );
  }
}

export default SombraHeader;
