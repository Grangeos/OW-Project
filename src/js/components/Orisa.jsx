import React, {Component} from 'react';
import HeroComponent from "./HeroComponent";

import iconAbility1 from "../../scss/picture/Orisa/IconAbility.png";
import iconAbility2 from "../../scss/picture/Orisa/IconAbility1.png";
import iconAbility3 from "../../scss/picture/Orisa/IconAbility2.png";
import iconAbility4 from "../../scss/picture/Orisa/IconAbility3.png";
import iconAbility5 from "../../scss/picture/Orisa/IconAbility4.png";
import OrisaVideo from "../../scss/picture/Orisa/VideoIntroOrisa.mp4";
import video_ability_orisa1 from "../../scss/picture/Orisa/video-ability_orisa1.mp4";
import video_ability_orisa2 from "../../scss/picture/Orisa/video-ability_orisa2.mp4";
import video_ability_orisa3 from "../../scss/picture/Orisa/video-ability_orisa3.mp4";
import video_ability_orisa4 from "../../scss/picture/Orisa/video-ability_orisa4.mp4";
import video_ability_orisa5 from "../../scss/picture/Orisa/video-ability_orisa5.mp4";
import Test from "../../scss/picture/McCree/test.jpg";

class Orisa extends Component {
  render() {
    const data = {
      pers: "Orisa",
      description: "Orisa est le pilier central de son équipe, qu’elle défend en première ligne grâce à son écran protecteur. Elle peut attaquer à distance, renforcer ses propres défenses, projeter des charges à gravitons qui ralentissent et déplacent ses adversaires, ou encore déployer un surchargeur qui augmente les dégâts infligés par plusieurs de ses alliés.",
      videoIntro: OrisaVideo,
      nom: " Orisa",
      age: "1 mois",
      profession: "robot protecteur",
      baseOperation: "XNumbani",
      affiliation: "aucune",
      skills: [
        {
          img: iconAbility1,
          titre: "Canon à fusion",
          desc: "Le canon automatique d’Orisa inflige des dégâts en continu mais ralentit ses déplacements quand elle l’utilise.",
          videodesc: video_ability_orisa1
        }, {
          img: iconAbility2,
          titre: "Blindage",
          desc: "Orisa subit temporairement moins de dégâts et ne peut pas être affectée par des effets incapacitants.",
          videodesc: video_ability_orisa2
        }, {
          img: iconAbility3,
          titre: "Halte !",
          desc: "Orisa déploie un drone de modification du climat qui émet des bourrasques de vent et de neige dans une large zone. Les ennemis pris dans le blizzard sont ralentis et subissent des dégâts, et ceux qui s’attardent trop longtemps sont complètement gelés. ",
          videodesc: video_ability_orisa3
        }, {
          img: iconAbility4,
          titre: "Dispositif de protection",
          desc: "Orisa déploie un écran protecteur statique qui la protège ainsi que ses alliés. ",
          videodesc: video_ability_orisa4
        }, {
          img: iconAbility5,
          titre: "Surchargeur",
          desc: "Orisa déploie un appareil qui augmente les dégâts infligés par les alliés qui se trouvent dans sa ligne de vue.",
          videodesc: video_ability_orisa5
        }
      ],skin: [
        {
          imgskin: Test,
          skinname: "coucou"
        },{
          imgskin: Test,
          skinname: "salut"
        }
      ],
    }


    return (
      <HeroComponent {...data}/>
    );
  }
}
export default Orisa;
