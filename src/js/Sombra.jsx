import React, {Component} from 'react';
import HeroComponent from "./HeroComponent";

import iconAbility from "../scss/picture/Sombra/IconAbility.png";
import iconAbility1 from "../scss/picture/Sombra/IconAbility1.png";
import iconAbility2 from "../scss/picture/Sombra/IconAbility2.png";
import iconAbility3 from "../scss/picture/Sombra/IconAbility3.png";
import iconAbility4 from "../scss/picture/Sombra/IconAbility4.png";
import SombraVideo from "../scss/picture/Sombra/VideoIntroSombra.mp4";
import video_ability_sombra1 from "../scss/picture/Sombra/video-ability_sombra.mp4";
import video_ability_sombra2 from "../scss/picture/Sombra/video-ability_sombra1.mp4";
import video_ability_sombra3 from "../scss/picture/Sombra/video-ability_sombra2.mp4";
import video_ability_sombra4 from "../scss/picture/Sombra/video-ability_sombra3.mp4";
import video_ability_sombra5 from "../scss/picture/Sombra/video-ability_sombra4.mp4";

class Sombra extends Component {
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
      pers: "Sombra",
      description: "Ses talents de camouflage et ses attaques affaiblissantes font de Sombra une experte en infiltration. En piratant ses ennemis pour les déstabiliser, elle en fait des cibles faciles à éliminer tandis que son IEM peut conférer un avantage de poids contre des groupes entiers d’adversaires. Les capacités de transduction et de camouflage de Sombra en font une cible quasi insaisissable.",
      videoIntro: SombraVideo,
      nom: "░░░░░░",
      age: "30 ans",
      profession: "Hackeuse",
      baseOperation: "Dorado, Mexique",
      affiliation: "la Griffe, Los Muertos (anciennement)",
      skills: [
        {
          img: iconAbility,
          titre: "PISTOLET MITRAILLEUR",
          desc: "Le pistolet mitrailleur automatique de Sombra tire à courte portée.",
          videodesc: video_ability_sombra1
        }, {
          img: iconAbility1,
          titre: "PIRATAGE",
          desc: "Sombra peut pirater ses ennemis et les priver temporairement de leurs capacités, ou corrompre les kits de soins pour empêcher ses adversaires de s’en servir.",
          videodesc: video_ability_sombra2
        }, {
          img: iconAbility2,
          titre: "FURTIVITÉ",
          desc: "Sombra devient invisible pour une courte période, pendant laquelle sa vitesse augmente considérablement. Le camouflage est désactivé si vous attaquez, si vous utilisez des capacités offensives ou si vous subissez des dégâts.",
          videodesc: video_ability_sombra3
        }, {
          img: iconAbility3,
          titre: "TRANSDUCTEUR",
          desc: "Sombra lance une balise de transduction vers laquelle elle peut se téléporter instantanément tant que celle-ci est active (même si la balise se trouve encore dans les airs).",
          videodesc: video_ability_sombra4
        }, {
          img: iconAbility4,
          titre: "IEM",
          desc: "Sombra génère une large vague d’énergie électromagnétique qui désactive les boucliers ennemis et pirate tous les adversaires touchés par l’onde de choc.",
          videodesc: video_ability_sombra5
        }
      ]
    }


    return (
      <HeroComponent {...data}/>
    );
  }
}
export default Sombra;
