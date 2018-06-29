import React, {Component} from 'react';
import HeroComponent from "../HeroComponent";

import iconAbility1 from "../../../scss/picture/Zarya/IconAbility.png";
import iconAbility2 from "../../../scss/picture/Zarya/IconAbility1.png";
import iconAbility3 from "../../../scss/picture/Zarya/IconAbility2.png";
import iconAbility4 from "../../../scss/picture/Zarya/IconAbility3.png";
import ZaryaVideo from "../../../scss/picture/Zarya/VideoIntroZarya.mp4";
import video_ability_zarya1 from "../../../scss/picture/Zarya/video-ability_zarya1.mp4";
import video_ability_zarya2 from "../../../scss/picture/Zarya/video-ability_zarya2.mp4";
import video_ability_zarya3 from "../../../scss/picture/Zarya/video-ability_zarya3.mp4";
import video_ability_zarya4 from "../../../scss/picture/Zarya/video-ability_zarya4.mp4";
import Test from "../../../scss/picture/McCree/test.jpg";

class Zarya extends Component {
  render() {
    const data = {
      pers: "Zarya",
      description: "Avec ses robustes écrans convertissant les dégâts subis en énergie pour son énorme canon à particules, Zarya représente un atout de choix pour tenir les premières lignes du champ de bataille.",
      videoIntro: ZaryaVideo,
      nom: " Aleksandra Zaryanova",
      age: "28  ans",
      profession: "soldat",
      baseOperation: "front de Krasnoïarsk, Russie",
      affiliation: "forces de défense russes",
      skills: [
        {
          img: iconAbility1,
          titre: "Canon à particules",
          desc: "Le puissant canon à particules de Zarya déchaîne un rayon d’énergie destructrice à courte portée. Zarya peut également s’en servir pour projeter une charge explosive capable de blesser plusieurs adversaires.",
          videodesc: video_ability_zarya1
        }, {
          img: iconAbility2,
          titre: "Écran de particules",
          desc: "Le canon à particules peut émettre une barrière individuelle qui protège Zarya contre les attaques la ciblant, absorbant leur énergie pour augmenter les dégâts et la largeur du rayon de son arme.",
          videodesc: video_ability_zarya2
        }, {
          img: iconAbility3,
          titre: "Écran généré",
          desc: "Zarya englobe l’un de ses coéquipiers dans une barrière d’énergie qui absorbe les coups et renforce la puissance de son canon à particules.",
          videodesc: video_ability_zarya3
        }, {
          img: iconAbility4,
          titre: "Orbe à gravitons",
          desc: "Zarya lance une bombe gravitationnelle qui attire les combattants ennemis et les blesse tant qu’ils restent piégés.",
          videodesc: video_ability_zarya4
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
export default Zarya;
