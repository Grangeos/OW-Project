import React, {Component} from 'react';
import HeroComponent from "../HeroComponent";

import iconAbility1 from "../../../scss/picture/Winston/IconAbility.png";
import iconAbility2 from "../../../scss/picture/Winston/IconAbility1.png";
import iconAbility3 from "../../../scss/picture/Winston/IconAbility2.png";
import iconAbility4 from "../../../scss/picture/Winston/IconAbility3.png";
import WinstonVideo from "../../../scss/picture/Winston/VideoIntroWinston.mp4";
import video_ability_winston1 from "../../../scss/picture/Winston/video-ability_winston1.mp4";
import video_ability_winston2 from "../../../scss/picture/Winston/video-ability_winston2.mp4";
import video_ability_winston3 from "../../../scss/picture/Winston/video-ability_winston3.mp4";
import video_ability_winston4 from "../../../scss/picture/Winston/video-ability_winston4.mp4";
import Test from "../../../scss/picture/McCree/test.jpg";

class Winston extends Component {
  render() {
    const data = {
      pers: "Winston",
      description: "Winston manie d’impressionnantes inventions (des propulseurs, un canon Tesla dévastateur et un générateur d’écran portable, entre autres) avec une force littéralement surhumaine.",
      videoIntro: WinstonVideo,
      nom: "Winston",
      age: "29 ans",
      profession: "scientifique, aventurier",
      baseOperation: "colonie lunaire Horizon (anciennement)",
      affiliation: "Overwatch (anciennement)",
      skills: [
        {
          img: iconAbility1,
          titre: "Canon Tesla",
          desc: "Tant que Winston garde le doigt sur la gâchette, son arme envoie un flot de décharges électriques à courte portée.",
          videodesc: video_ability_winston1
        }, {
          img: iconAbility2,
          titre: "Propulseurs",
          desc: "Winston bondit dans les airs avec l’aide de sa réserve d’énergie dorsale et retombe en infligeant des dégâts significatifs et en étourdissant les ennemis proches.",
          videodesc: video_ability_winston2
        }, {
          img: iconAbility3,
          titre: "Générateur d’écran",
          desc: "Le générateur d’écran de Winston projette un champ de force en forme de bulle qui absorbe les dégâts jusqu’à sa destruction. Les alliés à l’intérieur sont protégés et peuvent tirer.",
          videodesc: video_ability_winston3
        }, {
          img: iconAbility4,
          titre: "Rage primordiale",
          desc: "Winston embrasse sa nature animale, augmentant notablement ses points de vie et le rendant très difficile à tuer, renforçant ses attaques en mêlée et lui permettant d’utiliser ses propulseurs plus souvent. Quand il est enragé, Winston ne peut utiliser que les propulseurs et les attaques au corps à corps.",
          videodesc: video_ability_winston4
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
export default Winston;
