import React, {Component} from 'react';
import HeroComponent from "../HeroComponent";

import iconAbility1 from "../../../scss/picture/Reinhardt/IconAbility.png";
import iconAbility2 from "../../../scss/picture/Reinhardt/IconAbility1.png";
import iconAbility3 from "../../../scss/picture/Reinhardt/IconAbility2.png";
import iconAbility4 from "../../../scss/picture/Reinhardt/IconAbility3.png";
import iconAbility5 from "../../../scss/picture/Reinhardt/IconAbility4.png";
import ReinhardtVideo from "../../../scss/picture/Reinhardt/VideoIntroReinhardt.mp4";
import video_ability_Reinhardt1 from "../../../scss/picture/Reinhardt/video-ability_reinhardt1.mp4";
import video_ability_Reinhardt2 from "../../../scss/picture/Reinhardt/video-ability_reinhardt2.mp4";
import video_ability_Reinhardt3 from "../../../scss/picture/Reinhardt/video-ability_reinhardt3.mp4";
import video_ability_Reinhardt4 from "../../../scss/picture/Reinhardt/video-ability_reinhardt4.mp4";
import video_ability_Reinhardt5 from "../../../scss/picture/Reinhardt/video-ability_reinhardt5.mp4";
import Test from "../../../scss/picture/McCree/test.jpg";

class Reinhardt extends Component {
  render() {
    const data = {
      pers: "Reinhardt",
      description: "Protégé par une armure motorisée, armé d’un marteau et propulsé par un réacteur, Reinhardt charge ses ennemis et défend ses alliés à l’aide d’une large écran énergétique.",
      videoIntro: ReinhardtVideo,
      nom: "Reinhardt Wilhelm",
      age: "61 ans",
      profession: "aventurier",
      baseOperation: "Stuttgart, Allemagne",
      affiliation: "Overwatch (anciennement)",
      skills: [
        {
          img: iconAbility1,
          titre: "Marteau à réaction",
          desc: "Le marteau à réaction de Reinhardt est une arme de combat rapproché exemplaire, capable d’infliger des dégâts brutaux sur un large arc à chaque coup.",
          videodesc: video_ability_Reinhardt1
        }, {
          img: iconAbility2,
          titre: "Écran",
          desc: "Reinhardt déploie devant lui un large écran énergétique qui peut absorber une grande quantité de dégâts avant de disparaître. Reinhardt peut se protéger ainsi que ses compagnons qui se trouvent derrière l’écran, mais il ne peut pas attaquer pendant qu’il le maintient en place.",
          videodesc: video_ability_Reinhardt2
        }, {
          img: iconAbility3,
          titre: "Charge",
          desc: "Reinhardt charge droit devant lui et saisit le premier ennemi qui se trouve sur son chemin. S’il entre en collision avec un mur, les adversaires qu’il porte sont écrasés et subissent des dégâts extrêmes.",
          videodesc: video_ability_Reinhardt3
        }, {
          img: iconAbility4,
          titre: "Frappe de feu",
          desc: "En faisant tournoyer son marteau devant lui, Reinhardt envoie un projectile enflammé qui transperce et inflige des dégâts à tous les ennemis qu’il touche.",
          videodesc: video_ability_Reinhardt4
        },
        {
          img: iconAbility5,
          titre: "Choc sismique",
          desc: "Reinhardt abat son marteau à réaction sur le sol, ce qui blesse et renverse tous les ennemis devant lui.",
          videodesc: video_ability_Reinhardt5
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
export default Reinhardt;
