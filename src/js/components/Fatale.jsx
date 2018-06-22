import React, {Component} from 'react';
import HeroComponent from "./HeroComponent";

import iconAbility1 from "../../scss/picture/Fatale/IconAbility.png";
import iconAbility2 from "../../scss/picture/Fatale/IconAbility1.png";
import iconAbility3 from "../../scss/picture/Fatale/IconAbility2.png";
import iconAbility4 from "../../scss/picture/Fatale/IconAbility3.png";
import FataleVideo from "../../scss/picture/Fatale/VideoIntroFatale.mp4";
import video_ability_fatale1 from "../../scss/picture/Fatale/video-ability_fatale1.mp4";
import video_ability_fatale2 from "../../scss/picture/Fatale/video-ability_fatale2.mp4";
import video_ability_fatale3 from "../../scss/picture/Fatale/video-ability_fatale3.mp4";
import video_ability_fatale4 from "../../scss/picture/Fatale/video-ability_fatale4.mp4";
import Test from "../../scss/picture/McCree/test.jpg";

class Fatale extends Component {
  render() {
    const data = {
      pers: "Fatale",
      description: "Fatale emploie tous les moyens à sa disposition pour éliminer ses cibles : des mines qui diffusent un gaz toxique, une visière qui confère une vision infrarouge à son équipe et un puissant fusil à lunette qui peut tirer en mode automatique.",
      videoIntro: FataleVideo,
      nom: "Amélie Lacroix",
      age: "33 ans",
      profession: "assassin",
      baseOperation: "Annecy, France",
      affiliation: " la Griffe",
      skills: [
        {
          img: iconAbility1,
          titre: "BAISER DE LA VEUVE",
          desc: "Fatale est équipée d’un fusil polyvalent idéal pour abattre à la lunette les cibles les plus lointaines. Il peut aussi être utilisé en mode automatique sur les cibles à moyenne portée.",
          videodesc: video_ability_fatale1
        }, {
          img: iconAbility2,
          titre: "GRAPPIN",
          desc: "Fatale peut envoyer un grappin vers la position qu’elle vise. Une fois le grappin arrimé, elle est rapidement attirée le long de son câble, ce qui lui permet d’améliorer sa visibilité du champ de bataille et d’esquiver ou de contourner des cibles.",
          videodesc: video_ability_fatale2
        }, {
          img: iconAbility3,
          titre: "MINE VENIMEUSE",
          desc: "Fatale applique des mines venimeuses à armement rapide qui adhèrent à quasiment n’importe quelle surface. Lorsqu’une cible s’aventure à portée du détecteur de mouvement intégré à la mine, cette dernière explose en dégageant un gaz empoisonné qui affecte tous les ennemis à proximité.",
          videodesc: video_ability_fatale3
        }, {
          img: iconAbility4,
          titre: "INFRAVISION",
          desc: "La visière de reconnaissance de Fatale lui permet de voir la signature thermique de ses cibles, même au travers des murs ou autres obstacles pendant un certain temps. Cette perception améliorée est partagée avec ses alliés.",
          videodesc: video_ability_fatale4
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
export default Fatale;
