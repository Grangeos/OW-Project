import React, {Component} from 'react';
import HeroComponent from "./HeroComponent";

import iconAbility1 from "../scss/picture/Mercy/IconAbility.png";
import iconAbility2 from "../scss/picture/Mercy/IconAbility1.png";
import iconAbility3 from "../scss/picture/Mercy/IconAbility2.png";
import iconAbility4 from "../scss/picture/Mercy/IconAbility3.png";
import iconAbility5 from "../scss/picture/Mercy/IconAbility4.png";
import iconAbility6 from "../scss/picture/Mercy/IconAbility5.png";
import MercyVideo from "../scss/picture/Mercy/VideoIntroMercy.mp4";
import video_ability_mercy1 from "../scss/picture/Mercy/video-ability_mercy1.mp4";
import video_ability_mercy2 from "../scss/picture/Mercy/video-ability_mercy2.mp4";
import video_ability_mercy3 from "../scss/picture/Mercy/video-ability_mercy3.mp4";
import video_ability_mercy4 from "../scss/picture/Mercy/video-ability_mercy4.mp4";
import video_ability_mercy5 from "../scss/picture/Mercy/video-ability_mercy5.mp4";
import video_ability_mercy6 from "../scss/picture/Mercy/video-ability_mercy6.mp4";

class Mercy extends Component {
  render() {
    const data = {
      pers: "Ange",
      description: "L’armure Valkyrie d’Ange lui permet de veiller sur ses coéquipiers tel un ange gardien. Grâce aux rayons de son Caducée, elle peut les soigner, les ressusciter ou les renforcer.",
      videoIntro: MercyVideo,
      nom: "Angela Ziegler",
      age: "37 ans",
      profession: " médecin urgentiste, équipe de premiers secours",
      baseOperation: "Zurich, Suisse",
      affiliation: "Overwatch (anciennement)",
      skills: [
        {
          img: iconAbility1,
          titre: "CADUCÉE",
          desc: "Ange projette un des deux rayons sur un allié. En maintenant les rayons, elle peut soigner l’allié ciblé ou augmenter les dégâts qu’il inflige.",
          videodesc: video_ability_mercy1
        }, {
          img: iconAbility2,
          titre: "MISÉRICORDE",
          desc: "Ange tire une salve avec son arme de poing.",
          videodesc: video_ability_mercy2
        }, {
          img: iconAbility3,
          titre: "ANGE GARDIEN",
          desc: "Ange vole vers un allié ciblé. Elle peut ainsi rejoindre rapidement ses coéquipiers pour mieux les assister dans les moments cruciaux.",
          videodesc: video_ability_mercy3
        }, {
          img: iconAbility4,
          titre: "RÉSURRECTION",
          desc: "Ange ranime un allié mort avec la totalité de ses points de vie.",
          videodesc: video_ability_mercy4
        }, {
          img: iconAbility5,
          titre: "SAUT DE L’ANGE",
          desc: "Grâce aux propulseurs de son armure Valkyrie, Ange peut ralentir sa vitesse de chute et descendre de n’importe quelle hauteur.",
          videodesc: video_ability_mercy5
        }, {
          img: iconAbility6,
          titre: "VALKYRIE",
          desc: "Confère à Ange la capacité à voler. Ses capacités sont améliorées.",
          videodesc: video_ability_mercy6
        }
      ]
    }

    const { description, pers, videoIntro, nom, age, profession, baseOperation, affiliation, skills } = data;
    return (
      <HeroComponent {...data}/>
    );
  }
}
export default Mercy;
