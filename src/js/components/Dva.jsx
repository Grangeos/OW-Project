import React, {Component} from 'react';
import HeroComponent from "./HeroComponent";

import iconAbility1 from "../../scss/picture/Dva/IconAbility.png";
import iconAbility2 from "../../scss/picture/Dva/IconAbility1.png";
import iconAbility3 from "../../scss/picture/Dva/IconAbility2.png";
import iconAbility4 from "../../scss/picture/Dva/IconAbility3.png";
import iconAbility5 from "../../scss/picture/Dva/IconAbility4.png";
import iconAbility6 from "../../scss/picture/Dva/IconAbility5.png";
import iconAbility7 from "../../scss/picture/Dva/IconAbility6.png";
import DvaVideo from "../../scss/picture/Dva/VideoIntroDva.mp4";
import video_ability_Dva1 from "../../scss/picture/Dva/video-ability_dva1.mp4";
import video_ability_Dva2 from "../../scss/picture/Dva/video-ability_dva2.mp4";
import video_ability_Dva3 from "../../scss/picture/Dva/video-ability_dva3.mp4";
import video_ability_Dva4 from "../../scss/picture/Dva/video-ability_dva4.mp4";
import video_ability_Dva5 from "../../scss/picture/Dva/video-ability_dva5.mp4";
import video_ability_Dva6 from "../../scss/picture/Dva/video-ability_dva6.mp4";
import video_ability_Dva7 from "../../scss/picture/Dva/video-ability_dva7.mp4";
import Test from "../../scss/picture/McCree/test.jpg";


class Dva extends Component {
  render() {
    const data = {
      pers: "D.Va",
      description: "Le méca de D.Va est aussi agile que puissant : ses fusio-canons jumelés tirent en continu à courte portée, et elle peut activer ses turboréacteurs pour bondir par-dessus ennemis et obstacles, ou abattre les projectiles en plein air avec sa matrice défensive.",
      videoIntro: DvaVideo,
      nom: "Hana Song",
      age: "19 ans",
      profession: "joueuse pro (anciennement), pilote de méca",
      baseOperation: "Busan, Corée du Sud",
      affiliation: "MEKA (Mobile Exo-force, Korean Army)",
      skills: [
        {
          img: iconAbility1,
          titre: "FUSIO-CANONS",
          desc: "Le méca de D.VA est équipé de canons rotatifs jumelés à courte portée. Activés, ils infligent d’importants dégâts continus sans avoir besoin d’être rechargés, mais ils ralentissent les déplacements de D.Va.",
          videodesc: video_ability_Dva1
        }, {
          img: iconAbility2,
          titre: "PISTOLASER",
          desc: "Lorsqu’elle est hors de son méca, D.Va peut continuer le combat avec une arme automatique à moyenne portée.",
          videodesc: video_ability_Dva2
        }, {
          img: iconAbility3,
          titre: "TURBORÉACTEURS",
          desc: "Le méca se projette dans les airs et D.Va est propulsée en avant par l’inertie. Elle peut tourner et changer de direction ou foncer sur ses ennemis, les projetant en arrière.",
          videodesc: video_ability_Dva3
        }, {
          img: iconAbility4,
          titre: "MATRICE DÉFENSIVE",
          desc: "D.Va peut maintenir son système de ciblage avant pendant un court instant. Tant qu’il est actif, les projectiles interceptés par la matrice sont neutralisés.",
          videodesc: video_ability_Dva4
        }, {
          img: iconAbility5,
          titre: "MICRO-MISSILES",
          desc: "D.Va lance une volée de roquettes explosives.",
          videodesc: video_ability_Dva5
        }, {
          img: iconAbility6,
          titre: "AUTODESTRUCTION",
          desc: "D.Va s’éjecte de son méca et fait sauter son réacteur. L’explosion inflige des dégâts considérables aux adversaires proches.",
          videodesc: video_ability_Dva6
        },{
            img: iconAbility7,
            titre: "APPEL DU MÉCA",
            desc: "Si son armure de combat blindée est détruite, D.Va peut appeler un nouveau méca et reprendre le combat.",
            videodesc: video_ability_Dva7
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
export default Dva;
