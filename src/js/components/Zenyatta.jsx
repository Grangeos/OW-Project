import React, {Component} from 'react';
import HeroComponent from "./HeroComponent";

import iconAbility1 from "../../scss/picture/Zenyatta/IconAbility.png";
import iconAbility2 from "../../scss/picture/Zenyatta/IconAbility1.png";
import iconAbility3 from "../../scss/picture/Zenyatta/IconAbility2.png";
import iconAbility4 from "../../scss/picture/Zenyatta/IconAbility3.png";
import ZenyattaVideo from "../../scss/picture/Zenyatta/VideoIntroZenyatta.mp4";
import video_ability_Zenyatta1 from "../../scss/picture/Zenyatta/video-ability_zenyatta1.mp4";
import video_ability_Zenyatta2 from "../../scss/picture/Zenyatta/video-ability_zenyatta2.mp4";
import video_ability_Zenyatta3 from "../../scss/picture/Zenyatta/video-ability_zenyatta3.mp4";
import video_ability_Zenyatta4 from "../../scss/picture/Zenyatta/video-ability_zenyatta4.mp4";
import Test from "../../scss/picture/McCree/test.jpg";

class Zenyatta extends Component {
  render() {
    const data = {
      pers: "Zenyatta",
      description: "Zenyatta invoque des orbes d’harmonie et de discorde pour soigner ses coéquipiers et affaiblir ses ennemis, tout en maintenant un état de transcendance qui le rend insensible aux dégâts.",
      videoIntro: ZenyattaVideo,
      nom: " Tekhartha Zenyatta",
      age: "20 ans",
      profession: "gourou errant, aventurier",
      baseOperation: "monastère shambali, Népal (anciennement)",
      affiliation: "les Shambali (anciennement)",
      skills: [
        {
          img: iconAbility1,
          titre: "ORBE DE DESTRUCTION",
          desc: "Zenyatta lance ses orbes d’énergie destructrice soit individuellement, soit en rafale après avoir passé quelques secondes à rassembler de l’énergie.",
          videodesc: video_ability_Zenyatta1
        }, {
          img: iconAbility2,
          titre: "ORBE D'HARMONIE",
          desc: "Zenyatta lance un orbe au-dessus d’un allié ciblé. Tant que Zenyatta reste en vie, l’orbe restaure lentement les points de vie de cet allié. Ne peut être utilisé que sur un allié à la fois.",
          videodesc: video_ability_Zenyatta2
        }, {
          img: iconAbility3,
          titre: "ORBE DE DISCORDE",
          desc: "Lancer un orbe de discorde sur un ennemi amplifie la quantité de dégâts que celui-ci reçoit tant que Zenyatta est en vie. Ne peut être utilisé que sur un adversaire à la fois.",
          videodesc: video_ability_Zenyatta3
        }, {
          img: iconAbility4,
          titre: "TRANSCENDANCE",
          desc: "Zenyatta parvient à accéder à un stade d’existence supérieur pendant un court moment. Tant qu’il se transcende, Zenyatta ne peut pas utiliser ses capacités ou ses armes, mais il est immunisé aux dégâts et restaure automatiquement ses points de vie et ceux des alliés proches.",
          videodesc: video_ability_Zenyatta4
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
export default Zenyatta;
