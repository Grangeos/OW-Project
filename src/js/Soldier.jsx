import React, {Component} from 'react';
import HeroComponent from "./HeroComponent";

import iconAbility1 from "../scss/picture/Soldier/iconAbility.png";
import iconAbility2 from "../scss/picture/Soldier/iconAbility1.png";
import iconAbility3 from "../scss/picture/Soldier/iconAbility2.png";
import iconAbility4 from "../scss/picture/Soldier/iconAbility3.png";
import iconAbility5 from "../scss/picture/Soldier/iconAbility4.png";
import SoldierVideo from "../scss/picture/Soldier/VideoIntroSoldier.mp4";
import video_ability_soldier1 from "../scss/picture/Soldier/video-ability_solder1.mp4";
import video_ability_soldier2 from "../scss/picture/Soldier/video-ability_solder2.mp4";
import video_ability_soldier3 from "../scss/picture/Soldier/video-ability_solder3.mp4";
import video_ability_soldier4 from "../scss/picture/Soldier/video-ability_solder4.mp4";
import video_ability_soldier5 from "../scss/picture/Soldier/video-ability_solder5.mp4";

class Soldier extends Component {
  render() {
    const data = {
      pers: "Soldat-76",
      description: "Équipé d’armes ultra avancées, dont un fusil à impulsions expérimental également capable de tirer plusieurs roquettes LX à la fois, soldat : 76 est un guerrier rapide et expérimenté qui sait soutenir ses alliés.",
      videoIntro: SoldierVideo,
      nom: "inconnue",
      age: "inconnue",
      profession: "justicier",
      baseOperation: "inconnue",
      affiliation: "Overwatch (anciennement)",
      skills: [
        {
          img: iconAbility1,
          titre: "FUSIL À IMPULSIONS",
          desc: "Le fusil à impulsions entièrement automatique du soldat : 76 reste particulièrement stable lorsque ce dernier vide son chargeur.",
          videodesc: video_ability_soldier1
        }, {
          img: iconAbility2,
          titre: "ROQUETTES LX",
          desc: "Le fusil à impulsions du soldat : 76 tire plusieurs petites roquettes à la fois. L’explosion des roquettes inflige des dégâts aux ennemis dans une petite zone.",
          videodesc: video_ability_soldier2
        }, {
          img: iconAbility3,
          titre: "SPRINT",
          desc: "Qu’il ait besoin de fuir les tirs ennemis ou de revenir au combat rapidement, le soldat : 76 peut foncer droit devant lui. Toute action autre qu’une course vers l’avant met fin à son Sprint.",
          videodesc: video_ability_soldier3
        }, {
          img: iconAbility4,
          titre: "CHAMP BIOTIQUE",
          desc: "Le soldat : 76 pose au sol un émetteur biotique. L’énergie ainsi projetée soigne 76 et ses équipiers qui se trouvent dans le champ d’action.",
          videodesc: video_ability_soldier4
        }, {
          img: iconAbility5,
          titre: "VISIÈRE TACTIQUE",
          desc: "La visière tactique de localisation du soldat : 76 « verrouille » la menace la plus proche de son viseur. Si un ennemi quitte son champ de vision, le soldat : 76 peut rapidement changer de cible.",
          videodesc: video_ability_soldier5
        }
      ]
    }

    const { description, pers, videoIntro, nom, age, profession, baseOperation, affiliation, skills } = data;
    return (
      <HeroComponent {...data}/>
    );
  }
}
export default Soldier;
