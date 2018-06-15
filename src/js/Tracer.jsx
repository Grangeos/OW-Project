import React, {Component} from 'react';
import HeroComponent from "./HeroComponent";

import iconAbility from "../scss/picture/Tracer/IconAbility.png";
import iconAbility1 from "../scss/picture/Tracer/IconAbility1.png";
import iconAbility2 from "../scss/picture/Tracer/IconAbility2.png";
import iconAbility3 from "../scss/picture/Tracer/IconAbility3.png";
import TracerVideo from "../scss/picture/Tracer/VideoIntroTracer.mp4";
import video_ability_tracer1 from "../scss/picture/Tracer/video-ability_tracer.mp4";
import video_ability_tracer2 from "../scss/picture/Tracer/video-ability_tracer1.mp4";
import video_ability_tracer3 from "../scss/picture/Tracer/video-ability_tracer2.mp4";
import video_ability_tracer4 from "../scss/picture/Tracer/video-ability_tracer3.mp4";

class Tracer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      activeTab: -1
    };
  }

  setActiveTab(index) {
    if (this.state.activeTab === index) {
      this.setState({activeTab: -1});
    } else {
      this.setState({activeTab: index});
    }
  }

  render() {
    const data = {
      pers: "Tracer",
      description: "Armées de deux pulseurs, de bombes à retardement énergétiques et d’une langue bien pendue, Tracer est capable de passer immédiatement d’un endroit à un autre et de remonter dans le temps pour mieux combattre les injustices à travers le monde.",
      videoIntro: TracerVideo,
      nom: "Lena Oxton",
      age: "26 ans",
      profession: "aventurière",
      baseOperation: "Londres, Angleterre",
      affiliation: "Overwatch (anciennement)",
      skills: [
        {
          img: iconAbility,
          titre: "PULSEURS",
          desc: "Tracer a une cadence de tir très rapide grâce à ses pistolets.",
          videodesc: video_ability_tracer1
        }, {
          img: iconAbility1,
          titre: "TRANSFERT",
          desc: "Tracer fonce droit devant elle et réapparaît quelques mètres plus loin. Elle peut cumuler jusqu’à trois charges de transfert, et en génère régulièrement à quelques secondes d’intervalle.",
          videodesc: video_ability_tracer2
        }, {
          img: iconAbility2,
          titre: "RAPPEL",
          desc: "Tracer bondit en arrière dans le temps et récupère les points de vie et les munitions dont elle disposait, ainsi que sa position précise sur la carte quelques secondes plus tôt.",
          videodesc: video_ability_tracer3
        }, {
          img: iconAbility3,
          titre: "BOMBE À IMPULSION",
          desc: "Tracer lance une grosse charge explosive qui adhère à n’importe quelle surface, ou à l’adversaire ayant le malheur de la recevoir. Après un court délai, la bombe explose en infligeant des dégâts importants à tous les ennemis dans la zone de déflagration.",
          videodesc: video_ability_tracer4
        },
      ]
    }

    const { description, pers, videoIntro, nom, age, profession, baseOperation, affiliation, skills } = data;
    return (
      <HeroComponent {...data}/>
    );
  }
}
export default Tracer;
