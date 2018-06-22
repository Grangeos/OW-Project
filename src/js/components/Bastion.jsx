import React, {Component} from 'react';
import HeroComponent from "./HeroComponent";

import iconAbility1 from "../../scss/picture/Bastion/IconAbility.png";
import iconAbility2 from "../../scss/picture/Bastion/IconAbility1.png";
import iconAbility3 from "../../scss/picture/Bastion/IconAbility2.png";
import iconAbility4 from "../../scss/picture/Bastion/IconAbility3.png";
import iconAbility5 from "../../scss/picture/Bastion/IconAbility4.png";
import BastionVideo from "../../scss/picture/Bastion/VideoIntroBastion.mp4";
import video_ability_Bastion1 from "../../scss/picture/Bastion/video-ability_bastion.mp4";
import video_ability_Bastion2 from "../../scss/picture/Bastion/video-ability_bastion1.mp4";
import video_ability_Bastion3 from "../../scss/picture/Bastion/video-ability_bastion2.mp4";
import video_ability_Bastion4 from "../../scss/picture/Bastion/video-ability_bastion3.mp4";
import video_ability_Bastion5 from "../../scss/picture/Bastion/video-ability_bastion4.mp4";
import Test from "../../scss/picture/McCree/test.jpg";

class Bastion extends Component {
  render() {
    const data = {
      pers: "Bastion",
      description: "Avec son protocole de réparation et sa capacité à alterner entre configuration d’assaut stationnaire, de reconnaissance ou de tank, les chances de victoire de Bastion sont très élevées.",
      videoIntro: BastionVideo,
      nom: " automate de siège des Laboratoires SST E54, « Bastion",
      age: "30 ans",
      profession: "automate de combat",
      baseOperation: "inconnue",
      affiliation: "aucune",
      skills: [
        {
          img: iconAbility1,
          titre: "CONFIGURATION : RECONNAISSANCE",
          desc: "En mode Reconnaissance, Bastion est parfaitement mobile et équipé d’une mitrailleuse légère qui tire des rafales régulières et est efficace à moyenne portée.",
          videodesc: video_ability_Bastion1
        }, {
          img: iconAbility2,
          titre: "CONFIGURATION : SENTINELLE",
          desc: "En mode Sentinelle, Bastion est une centrale électrique statique, protégée par un écran frontal et équipée d’une mitrailleuse rotative capable de déchaîner une pluie de balles. L’arme peut effectuer un « balayage » dévastateur à courte ou moyenne portée.",
          videodesc: video_ability_Bastion2
        }, {
          img: iconAbility3,
          titre: "RECONFIGURATION",
          desc: "Bastion passe d’un mode de combat à l’autre afin de s’adapter aux conditions du champ de bataille.",
          videodesc: video_ability_Bastion3
        }, {
          img: iconAbility4,
          titre: "AUTORÉPARATION",
          desc: "Bastion récupère des points de vie, mais ses systèmes d’armement sont désactivés jusqu’à la fin de la réparation.",
          videodesc: video_ability_Bastion4
        }, {
          img: iconAbility5,
          titre: "CONFIGURATION : TANK",
          desc: "En mode Tank, Bastion déploie des chenilles et un puissant canon à longue portée. Les tirs explosifs du canon démolissent les cibles présentes dans son large rayon d’explosion, mais Bastion ne peut conserver ce mode que pour un temps limité.",
          videodesc: video_ability_Bastion5
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

    const { description, pers, videoIntro, nom, age, profession, baseOperation, affiliation, skills } = data;
    return (
      <HeroComponent {...data}/>
    );
  }
}
export default Bastion;
