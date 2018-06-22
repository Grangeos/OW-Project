import React, {Component} from 'react';
import HeroComponent from "./HeroComponent";

import iconAbility1 from "../../scss/picture/Genji/IconAbility.png";
import iconAbility2 from "../../scss/picture/Genji/IconAbility1.png";
import iconAbility3 from "../../scss/picture/Genji/IconAbility2.png";
import iconAbility4 from "../../scss/picture/Genji/IconAbility3.png";
import GenjiVideo from "../../scss/picture/Genji/VideoIntroGenji.mp4";
import video_ability_genji1 from "../../scss/picture/Genji/video-ability_genji.mp4";
import video_ability_genji2 from "../../scss/picture/Genji/video-ability_genji1.mp4";
import video_ability_genji3 from "../../scss/picture/Genji/video-ability_genji2.mp4";
import video_ability_genji4 from "../../scss/picture/Genji/video-ability_genji3.mp4";
import Test from "../../scss/picture/McCree/test.jpg";


class Genji extends Component {
  render() {
    const data = {
      pers: "Genji",
      description: "Genji lance des shurikens précis et mortels sur ses cibles, et utilise son katana à la pointe de la technologie pour dévier les projectiles ou exécuter une Frappe du vent qui blesse sérieusement ses ennemis..",
      videoIntro: GenjiVideo,
      nom: "Genji Shimada",
      age: "35 ans",
      profession: "aventurier",
      baseOperation: "monastère de Shambali, Népal",
      affiliation: "clan Shimada (anciennement), Overwatch (anciennement)",
      skills: [
        {
          img: iconAbility1,
          titre: "Shuriken",
          desc: "Genji lance trois shurikens mortels en succession rapide. Il peut également lancer trois shurikens en éventail.",
          videodesc: video_ability_genji1
        }, {
          img: iconAbility2,
          titre: "Riposte",
          desc: "Avec des moulinets de son épée aussi rapides que l’éclair, Genji dévie les attaques et les renvoie vers ses adversaires.",
          videodesc: video_ability_genji2
        }, {
          img: iconAbility3,
          titre: "Frappe du vent",
          desc: "Genji file en avant, tranchant l’air de son katana et traversant les ennemis sur son passage. Si Genji élimine un adversaire grâce à cette capacité, il peut s’en servir immédiatement à nouveau.",
          videodesc: video_ability_genji3
        }, {
          img: iconAbility4,
          titre: "Lame du dragon",
          desc: "Genji brandit son katana pendant une courte période. Il peut délivrer des coups mortels à toutes les cibles à portée jusqu’à ce qu’il rengaine son sabre.",
          videodesc: video_ability_genji4
        }
      ],
      skin: [
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
export default Genji;
