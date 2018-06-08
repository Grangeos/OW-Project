import React, {Component} from 'react';
import HeroComponent from "./HeroComponent";
import { Carousel} from "react-bootstrap";


import iconAbility1 from "../scss/picture/Pharah/IconAbility.png";
import iconAbility2 from "../scss/picture/Pharah/IconAbility1.png";
import iconAbility3 from "../scss/picture/Pharah/IconAbility2.png";
import iconAbility4 from "../scss/picture/Pharah/IconAbility3.png";
import PharahVideo from "../scss/picture/Pharah/VideoIntroPharah.mp4";
import video_ability_pharah1 from "../scss/picture/Pharah/video-ability_pharah.mp4";
import video_ability_pharah2 from "../scss/picture/Pharah/video-ability_pharah1.mp4";
import video_ability_pharah3 from "../scss/picture/Pharah/video-ability_pharah2.mp4";
import video_ability_pharah4 from "../scss/picture/Pharah/video-ability_pharah3.mp4";
import photo from "../scss/picture/Pharah/pharah.jpg";

class Pharah extends Component {
  render() {
    const data = {
      pers: "Pharah",
      description: "Fendant les airs dans son armure de combat et armée d’un lance-roquettes tirant des projectiles incapacitants ou dévastateurs, Pharah jouera assurément un rôle crucial dans chaque bataille.",
      videoIntro: PharahVideo,
      nom: "Fariha Amari",
      age: "32 ans",
      profession: "responsable de la sécurité",
      baseOperation: "Gizeh, Égypte",
      affiliation: "Helix Security International",
      skills: [
        {
          img: iconAbility1,
          titre: "Lance-roquettes Falcon",
          desc: "Pharah utilise son arme principale pour envoyer des roquettes qui infligent des dégâts significatifs dans une large zone de déflagration.",
          videodesc: video_ability_pharah1
        }, {
          img: iconAbility2,
          titre: "Réacteurs",
          desc: "Propulsée par les réacteurs de son armure, Pharah peut s’élever en altitude.",
          videodesc: video_ability_pharah2
        }, {
          img: iconAbility3,
          titre: "Conflagration",
          desc: "Pharah libère une roquette qui repousse violemment tous les ennemis avec lesquels elle entre en contact.",
          videodesc: video_ability_pharah3
        }, {
          img: iconAbility4,
          titre: "Barrage",
          desc: "Pharah dirige une salve continue de mini-roquettes pour détruire des groupes d’ennemis.",
          videodesc: video_ability_pharah4
        }
      ]
    }

    const { description, pers, videoIntro, nom, age, profession, baseOperation, affiliation, skills } = data;
    return (
      <HeroComponent {...data}>
        <Carousel.Item style={{backgroundImage:`url(${photo})`}} />
          <Carousel.Caption>
            <h3>{pers}</h3>
          </Carousel.Caption>
        <Carousel.Item style={{backgroundImage:`url(${photo})`}} />
            <Carousel.Caption>
              <h3>{pers}</h3>
            </Carousel.Caption>
              {/* Exemple */}
      </HeroComponent>



    );
  }
}
export default Pharah;
