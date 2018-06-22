import React, {Component} from 'react';
import HeroComponent from "./HeroComponent";

import iconAbility1 from "../../scss/picture/Lucio/IconAbility.png";
import iconAbility2 from "../../scss/picture/Lucio/IconAbility1.png";
import iconAbility3 from "../../scss/picture/Lucio/IconAbility2.png";
import iconAbility4 from "../../scss/picture/Lucio/IconAbility3.png";
import LucioVideo from "../../scss/picture/Lucio/VideoIntroLucio.mp4";
import video_ability_lucio1 from "../../scss/picture/Lucio/video-ability_lucio1.mp4";
import video_ability_lucio2 from "../../scss/picture/Lucio/video-ability_lucio2.mp4";
import video_ability_lucio3 from "../../scss/picture/Lucio/video-ability_lucio3.mp4";
import video_ability_lucio4 from "../../scss/picture/Lucio/video-ability_lucio4.mp4";
import Test from "../../scss/picture/McCree/test.jpg";

class Lucio extends Component {
  render() {
    const data = {
      pers: "Lúcio",
      description: "Sur le champ de bataille, l’ampli high-tech de Lúcio envoie des projectiles soniques sur ses ennemis et les repousse avec des ondes de choc. Ses chansons soignent ses alliés ou augmentent leur vitesse de déplacement, et il peut changer de morceau à la volée.",
      videoIntro: LucioVideo,
      nom: "Lúcio Correia dos Santos",
      age: "26 ans",
      profession: " DJ, champion de la liberté",
      baseOperation: "Rio de Janeiro, Brésil",
      affiliation: "Aucune",
      skills: [
        {
          img: iconAbility1,
          titre: "Ampli",
          desc: "Lúcio peut frapper ses ennemis à l’aide de projectiles soniques ou les repousser avec une onde de choc sonore.",
          videodesc: video_ability_lucio1
        }, {
          img: iconAbility2,
          titre: "Crossfade",
          desc: "Lúcio se stimule constamment, ainsi que ses équipiers proches, grâce à la musique. Il peut alterner entre deux chansons : l’une augmente la vitesse de déplacement, la seconde rend des points de vie.",
          videodesc: video_ability_lucio2
        }, {
          img: iconAbility3,
          titre: "Volume max.",
          desc: "Lúcio augmente le volume de ses enceintes, ce qui améliore l’effet de ses chansons.",
          videodesc: video_ability_lucio3
        }, {
          img: iconAbility4,
          titre: "Mur de son",
          desc: "Des vagues protectrices irradient de l’ampli de Lúcio et lui procurent ainsi qu’à ses alliés proches des boucliers personnels.",
          videodesc: video_ability_lucio4
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
export default Lucio;
