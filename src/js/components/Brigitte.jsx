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
      pers: "Ange",
      description: "L’armure Valkyrie d’Ange lui permet de veiller sur ses coéquipiers tel un ange gardien. Grâce aux rayons de son Caducée, elle peut les soigner, les ressusciter ou les renforcer.",
      videoIntro: BrigitteVideo,
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
          videodesc: video_ability_brigitte1
        }, {
          img: iconAbility2,
          titre: "MISÉRICORDE",
          desc: "Ange tire une salve avec son arme de poing.",
          videodesc: video_ability_brigitte2
        }, {
          img: iconAbility3,
          titre: "ANGE GARDIEN",
          desc: "Ange vole vers un allié ciblé. Elle peut ainsi rejoindre rapidement ses coéquipiers pour mieux les assister dans les moments cruciaux.",
          videodesc: video_ability_brigitte3
        }, {
          img: iconAbility4,
          titre: "RÉSURRECTION",
          desc: "Ange ranime un allié mort avec la totalité de ses points de vie.",
          videodesc: video_ability_brigitte4
        }, {
          img: iconAbility5,
          titre: "SAUT DE L’ANGE",
          desc: "Grâce aux propulseurs de son armure Valkyrie, Ange peut ralentir sa vitesse de chute et descendre de n’importe quelle hauteur.",
          videodesc: video_ability_brigitte5
        }, {
          img: iconAbility6,
          titre: "VALKYRIE",
          desc: "Confère à Ange la capacité à voler. Ses capacités sont améliorées.",
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
