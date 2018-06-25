import React, {Component} from 'react';
import HeroComponent from "./HeroComponent";

import iconAbility1 from "../../scss/picture/Brigitte/IconAbility.png";
import iconAbility2 from "../../scss/picture/Brigitte/IconAbility1.png";
import iconAbility3 from "../../scss/picture/Brigitte/IconAbility2.png";
import iconAbility4 from "../../scss/picture/Brigitte/IconAbility3.png";
import iconAbility5 from "../../scss/picture/Brigitte/IconAbility4.png";
import iconAbility6 from "../../scss/picture/Brigitte/IconAbility5.png";
import BrigitteVideo from "../../scss/picture/Brigitte/VideoIntroBrigitte.mp4";
import video_ability_brigitte1 from "../../scss/picture/Brigitte/video-ability_brigitte1.mp4";
import video_ability_brigitte2 from "../../scss/picture/Brigitte/video-ability_brigitte2.mp4";
import video_ability_brigitte3 from "../../scss/picture/Brigitte/video-ability_brigitte3.mp4";
import video_ability_brigitte4 from "../../scss/picture/Brigitte/video-ability_brigitte4.mp4";
import video_ability_brigitte5 from "../../scss/picture/Brigitte/video-ability_brigitte5.mp4";
import video_ability_brigitte6 from "../../scss/picture/Brigitte/video-ability_brigitte6.mp4";
import Test from "../../scss/picture/McCree/test.jpg";

class Brigitte extends Component {
  render() {
    const data = {
      pers: "Brigitte",
      description: "Brigitte est spécialisée dans les armures. Elle peut lancer des modules de réparation pour soigner ses alliés, ou les soigner automatiquement quand elle inflige des dégâts à ses ennemis à l’aide de son fléau. Cette arme peut toucher plusieurs cibles à la fois et a la capacité d’effectuer une frappe cinglante qui étourdit un ennemi à distance. Quand Brigitte entre dans la mêlée, son bouclier-écran lui fournit une protection pendant qu’elle attaque ses ennemis avec sa charge de bouclier. Sa capacité ultime, Ralliement, lui octroie un bonus de vitesse non négligeable pendant quelques secondes et fournit un bonus d’armure persistant à tous ses alliés proches.",
      videoIntro: BrigitteVideo,
      nom: " Brigitte Lindholm",
      age: "23  ans",
      profession: "  ingénieure en génie mécanique, aventurière",
      baseOperation: "Gothenburg, Suède (anciennement)",
      affiliation: "aucune",
      skills: [
        {
          img: iconAbility1,
          titre: "Fléau à réaction",
          desc: "L’arme de mêlée de Brigitte a une portée augmentée, ce qui lui permet de frapper plusieurs ennemis en un seul coup.",
          videodesc: video_ability_brigitte1
        }, {
          img: iconAbility2,
          titre: "Module de réparation",
          desc: "Brigitte lance un module de réparation qui soigne un allié. Tout soin excédentaire sur cet allié lui octroie un bonus d’armure en compensation.",
          videodesc: video_ability_brigitte2
        }, {
          img: iconAbility3,
          titre: "Fléau cinglant",
          desc: "Brigitte lance son fléau à distance et ce qui inflige des dégâts et repousse l’ennemi touché loin d’elle.",
          videodesc: video_ability_brigitte3
        }, {
          img: iconAbility4,
          titre: "Bouclier-écran",
          desc: "Brigitte déploie un bouclier d’énergie devant elle, qui absorbe un montant de dégâts limité.",
          videodesc: video_ability_brigitte4
        }, {
          img: iconAbility5,
          titre: "CHARGE DE BOUCLIER",
          desc: "Une fois son bouclier-écran déployé, Brigitte peut charger vers l’avant et étourdir un ennemi.",
          videodesc: video_ability_brigitte5
        }, {
          img: iconAbility6,
          titre: "Ralliement",
          desc: "Brigitte se déplace plus rapidement et fournit à ses alliés proches un bonus d’amure qui dure jusqu’à ce qu’il soit absorbé par les dégâts subis.",
          videodesc: video_ability_brigitte6
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
export default Brigitte;
