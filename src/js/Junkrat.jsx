import React, {Component} from 'react';
import HeroComponent from "./HeroComponent";

import iconAbility1 from "../scss/picture/Junkrat/IconAbility.png";
import iconAbility2 from "../scss/picture/Junkrat/IconAbility1.png";
import iconAbility3 from "../scss/picture/Junkrat/IconAbility2.png";
import iconAbility4 from "../scss/picture/Junkrat/IconAbility3.png";
import iconAbility5 from "../scss/picture/Junkrat/IconAbility4.png";
import JunkratVideo from "../scss/picture/Junkrat/VideoIntroJunkrat.mp4";
import video_ability_Junkrat1 from "../scss/picture/Junkrat/video-ability_junkrat.mp4";
import video_ability_Junkrat2 from "../scss/picture/Junkrat/video-ability_junkrat1.mp4";
import video_ability_Junkrat3 from "../scss/picture/Junkrat/video-ability_junkrat2.mp4";
import video_ability_Junkrat4 from "../scss/picture/Junkrat/video-ability_junkrat3.mp4";
import video_ability_Junkrat5 from "../scss/picture/Junkrat/video-ability_junkrat4.mp4";

class McCree extends Component {
  render() {
    const data = {
      pers: "Chacal",
      description: "Chacal a tout ce qu’il faut dans son arsenal pour interdire l’accès d’une zone à ses adversaires : un lance-grenades qui tire des projectiles rebondissants, des mines incapacitantes qui envoient valser ses ennemis et des pièges d’acier pour les immobiliser.",
      videoIntro: JunkratVideo,
      nom: "Jamison Fawkes",
      age: "25 ans",
      profession: "anarchiste, voleur, démolisseur, mercenaire, récupérateur",
      baseOperation: "Junkertown, Australie (anciennement)",
      affiliation: "Junkers (anciennement)",
      skills: [
        {
          img: iconAbility1,
          titre: "Lance-grenades",
          desc: "Le lance-grenades de Chacal projette des grenades sur une bonne distance. Elles rebondissent pour atteindre leur destination et explosent quand elles frappent un ennemi.",
          videodesc: video_ability_Junkrat1
        }, {
          img: iconAbility2,
          titre: "Mine incapacitante",
          desc: "Après avoir placé une de ses mines incapacitantes maison, Chacal peut la déclencher pour blesser les ennemis et les faire voler dans les airs... ou se propulser lui-même en l’air.",
          videodesc: video_ability_Junkrat2
        }, {
          img: iconAbility3,
          titre: "Piège d’acier",
          desc: "Chacal balance un piège géant à mâchoire métallique. Si un ennemi s’approche trop près du piège, il se referme, l’immobilisant et le blessant.",
          videodesc: video_ability_Junkrat3
        }, {
          img: iconAbility4,
          titre: "Mauvais perdant",
          desc: "Le sens de l'humour complètement azimuté de Chacal subsiste après sa mort : s’il est tué, il largue plusieurs grenades dégoupillées.",
          videodesc: video_ability_Junkrat4
        },
        {
          img: iconAbility5,
          titre: "Pneumastic",
          desc: "Chacal fait vrombir une bombe-pneu motorisée qui peut grimper sur les murs et les obstacles, et l’envoie rouler sur le champ de bataille. Il peut faire détoner le pneumastic à distance pour infliger d'importants dégâts aux ennemis pris dans l’explosion, ou simplement attendre qu’il explose de lui-même.",
          videodesc: video_ability_Junkrat5
        }
      ]
    }

    const { description, pers, videoIntro, nom, age, profession, baseOperation, affiliation, skills } = data;
    return (
      <HeroComponent {...data}/>
    );
  }
}
export default McCree;
