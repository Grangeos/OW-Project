import React, {Component} from 'react';
import HeroComponent from "./HeroComponent";

import iconAbility1 from "../../scss/picture/Hanzo/IconAbility.png";
import iconAbility2 from "../../scss/picture/Hanzo/IconAbility1.png";
import iconAbility3 from "../../scss/picture/Hanzo/IconAbility2.png";
import iconAbility4 from "../../scss/picture/Hanzo/IconAbility3.png";
import iconAbility5 from "../../scss/picture/Hanzo/IconAbility4.png";
import HanzoVideo from "../../scss/picture/Hanzo/VideoIntroHanzo.mp4";
import video_ability_Hanzo1 from "../../scss/picture/Hanzo/video-ability_hanzo.mp4";
import video_ability_Hanzo2 from "../../scss/picture/Hanzo/video-ability_hanzo1.mp4";
import video_ability_Hanzo3 from "../../scss/picture/Hanzo/video-ability_hanzo2.mp4";
import video_ability_Hanzo4 from "../../scss/picture/Hanzo/video-ability_hanzo3.mp4";
import video_ability_Hanzo5 from "../../scss/picture/Hanzo/video-ability_hanzo4.mp4";
import Test from "../../scss/picture/McCree/test.jpg";

class Hanzo extends Component {
  render() {
    const data = {
      pers: "Hanzo",
      description: "Les flèches polyvalentes de Hanzo peuvent révéler ses ennemis, ou se fragmenter pour toucher plusieurs cibles. Il peut également grimper aux murs pour tirer depuis une position élevée, et invoquer un gigantesque esprit dragon.",
      videoIntro: HanzoVideo,
      nom: "Hanzo Shimada",
      age: "38 ans",
      profession: "mercenaire, assassin",
      baseOperation: "Hanamura, Japon (anciennement)",
      affiliation: "Clan Shimada",
      skills: [
        {
          img: iconAbility1,
          titre: "ARC TEMPÊTE",
          desc: "Hanzo encoche une flèche et la décoche sur sa cible.",
          videodesc: video_ability_Hanzo1
        }, {
          img: iconAbility2,
          titre: "FLÈCHE SONIQUE",
          desc: "Hanzo projette une flèche équipée d’un sonar ; celle-ci marque tous les ennemis dans son rayon de détection et les rend plus faciles à traquer pour Hanzo et ses alliés.",
          videodesc: video_ability_Hanzo2
        }, {
          img: iconAbility3,
          titre: "RAFALE",
          desc: "Les prochaines flèches d’Hanzo sont lancées instantanément, mais leurs dégâts sont réduits.",
          videodesc: video_ability_Hanzo3
        }, {
          img: iconAbility4,
          titre: "FENTE",
          desc: "Hanzo peut effectuer des doubles sauts, ce qui lui permet de changer de direction dans les airs.",
          videodesc: video_ability_Hanzo4
        },
        {
          img: iconAbility5,
          titre: "FRAPPE DU DRAGON",
          desc: "Hanzo invoque l’esprit d’un dragon qui fend les airs devant lui. Il traverse les murs sur son passage et dévore tous les ennemis rencontrés.",
          videodesc: video_ability_Hanzo5
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
export default Hanzo;
