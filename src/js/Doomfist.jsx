import React, {Component} from 'react';
import HeroComponent from "./HeroComponent";

import iconAbility1 from "../scss/picture/Doomfist/IconAbility.png";
import iconAbility2 from "../scss/picture/Doomfist/IconAbility1.png";
import iconAbility3 from "../scss/picture/Doomfist/IconAbility2.png";
import iconAbility4 from "../scss/picture/Doomfist/IconAbility3.png";
import iconAbility5 from "../scss/picture/Doomfist/IconAbility4.png";
import DoomfistVideo from "../scss/picture/Doomfist/VideoIntroDoomfist.mp4";
import video_ability_Doomfist1 from "../scss/picture/Doomfist/video-ability_doomfist.mp4";
import video_ability_Doomfist2 from "../scss/picture/Doomfist/video-ability_doomfist1.mp4";
import video_ability_Doomfist3 from "../scss/picture/Doomfist/video-ability_doomfist2.mp4";
import video_ability_Doomfist4 from "../scss/picture/Doomfist/video-ability_doomfist3.mp4";
import video_ability_Doomfist5 from "../scss/picture/Doomfist/video-ability_doomfist4.mp4";

class Doomfist extends Component {
  render() {
    const data = {
      pers: "Doomfist",
      description: "Les améliorations cybernétiques de Doomfist font de lui un combattant de première ligne à la fois puissant et très mobile. Capable d’infliger des dégâts à distance avec son calibre prosthétique, il peut également frapper le sol pour projeter ses ennemis dans les airs, ou charger dans la mêlée grâce à son direct d’enfer. Face à un groupe compact, Doomfist bondit hors de vue de ses adversaires pour mieux s’écraser au sol dans une spectaculaire frappe météore.",
      videoIntro: DoomfistVideo,
      nom: "Akande Ogundimu",
      age: "45 ans",
      profession: "Mercenaire",
      baseOperation: "Oyo, Nigéria",
      affiliation: "La Griffe",
      skills: [
        {
          img: iconAbility1,
          titre: "Calibre prosthétique",
          desc: "Doomfist tire une rafale à courte portée par les articulations prosthétiques de son poing. Ses munitions se rechargent automatiquement sur la durée.",
          videodesc: video_ability_Doomfist1
        }, {
          img: iconAbility2,
          titre: "Onde de choc",
          desc: "Doomfist bondit en avant et frappe le sol, ce qui attire vers lui les ennemis proches.",
          videodesc: video_ability_Doomfist2
        }, {
          img: iconAbility3,
          titre: "Uppercut",
          desc: "Doomfist envoie un uppercut aux ennemis qui se trouvent devant lui et les fait voltiger.",
          videodesc: video_ability_Doomfist3
        }, {
          img: iconAbility4,
          titre: "Direct d’enfer",
          desc: "Doomfist charge un coup de poing, puis fonce vers l’avant et repousse un ennemi. Les dégâts sont augmentés si l’ennemi heurte un mur.",
          videodesc: video_ability_Doomfist4
        },
        {
          img: iconAbility5,
          titre: "Frappe météore",
          desc: "Doomfist bondit dans les airs, puis s’écrase au sol, infligeant alors d’importants dégâts.",
          videodesc: video_ability_Doomfist5
        }
      ]
    }

    const { description, pers, videoIntro, nom, age, profession, baseOperation, affiliation, skills } = data;
    return (
      <HeroComponent {...data}/>
    );
  }
}
export default Doomfist;
