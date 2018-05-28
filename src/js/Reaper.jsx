import React, {Component} from 'react';
import HeroComponent from "./HeroComponent";

import iconAbility1 from "../scss/picture/Reaper/IconAbility.png";
import iconAbility2 from "../scss/picture/Reaper/IconAbility1.png";
import iconAbility3 from "../scss/picture/Reaper/IconAbility2.png";
import iconAbility4 from "../scss/picture/Reaper/IconAbility3.png";
import ReaperVideo from "../scss/picture/Reaper/VideoIntroReaper.mp4";
import video_ability_reaper1 from "../scss/picture/Reaper/video-ability_reaper.mp4";
import video_ability_reaper2 from "../scss/picture/Reaper/video-ability_reaper1.mp4";
import video_ability_reaper3 from "../scss/picture/Reaper/video-ability_reaper2.mp4";
import video_ability_reaper4 from "../scss/picture/Reaper/video-ability_reaper3.mp4";

class Reaper extends Component {
  render() {
    const data = {
      pers: "Reaper",
      description: "Armé de son Pacificateur, McCree abat ses cibles avec une précision redoutable et se met à couvert plus vite que son ombre.",
      videoIntro: ReaperVideo,
      nom: "inconnue",
      age: "inconnue",
      profession: "mercenaire",
      baseOperation: "inconnue",
      affiliation: "inconnue",
      skills: [
        {
          img: iconAbility1,
          titre: "POMPES FUNÈBRES",
          desc: "Faucheur met ses ennemis en pièces avec ses deux fusils à pompe.",
          videodesc: video_ability_reaper1
        }, {
          img: iconAbility2,
          titre: "FORME SPECTRALE",
          desc: "Faucheur devient une ombre pendant une courte période. Sous cette forme spectrale, il ne peut être blessé et il est capable de passer au travers de ses ennemis mais ne peut pas utiliser son armement ou ses autres capacités.",
          videodesc: video_ability_reaper2
        }, {
          img: iconAbility3,
          titre: "VOIE DES OMBRES",
          desc: "Après avoir marqué une destination de son choix, Faucheur disparaît pour réapparaître à cet endroit.",
          videodesc: video_ability_reaper3
        }, {
          img: iconAbility4,
          titre: "ÉCLOSION MORTELLE",
          desc: "Quasi indiscernable, Faucheur vide ses deux fusils à pompe à tombeau ouvert, infligeant de très lourds dégâts à tous les ennemis proches.",
          videodesc: video_ability_reaper4
        }
      ]
    }

    const { description, pers, videoIntro, nom, age, profession, baseOperation, affiliation, skills } = data;
    return (
      <HeroComponent {...data}/>
    );
  }
}
export default Reaper;
