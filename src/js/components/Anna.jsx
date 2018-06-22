import React, {Component} from 'react';
import HeroComponent from "./HeroComponent";

import iconAbility1 from "../../scss/picture/Anna/IconAbility.png";
import iconAbility2 from "../../scss/picture/Anna/IconAbility1.png";
import iconAbility3 from "../../scss/picture/Anna/IconAbility2.png";
import iconAbility4 from "../../scss/picture/Anna/IconAbility3.png";
import AnnaVideo from "../../scss/picture/Anna/VideoIntroAnna.mp4";
import video_ability_anna1 from "../../scss/picture/Anna/video-ability_anna1.mp4";
import video_ability_anna2 from "../../scss/picture/Anna/video-ability_anna2.mp4";
import video_ability_anna3 from "../../scss/picture/Anna/video-ability_anna3.mp4";
import video_ability_anna4 from "../../scss/picture/Anna/video-ability_anna4.mp4";
import Test from "../../scss/picture/McCree/test.jpg";

class Anna extends Component {
  render() {
    const data = {
      pers: "Anna",
      description: "Anna manipule le climat pour ralentir ses ennemis et protéger les endroits importants. Son canon endothermique projette de redoutables pointes de glace ou libère un flux de givre, et elle peut entrer en cryostase pour survivre aux contre-attaques, ou bloquer le chemin de l’équipe adverse avec un mur de glace.",
      videoIntro: AnnaVideo,
      nom: " Anna-Ling Zhou",
      age: "31 ans",
      profession: "climatologue, aventurière",
      baseOperation: "Xi’an, Chine (anciennement)",
      affiliation: "Overwatch (anciennement)",
      skills: [
        {
          img: iconAbility1,
          titre: "Canon endothermique",
          desc: "Le blaster de Anna libère un flux de givre concentré à courte portée qui endommage, ralentit et finit par geler sur place les ennemis. Anna peut aussi s’en servir pour tirer des glaçons à portée moyenne.",
          videodesc: video_ability_anna1
        }, {
          img: iconAbility2,
          titre: "Cryostase",
          desc: "Anna s’entoure instantanément d'un épais bloc de glace. Elle se soigne et échappe aux dégâts tant qu’elle est à l’intérieur, mais elle ne peut ni se déplacer, ni utiliser de capacités. ",
          videodesc: video_ability_anna2
        }, {
          img: iconAbility3,
          titre: "Mur de glace",
          desc: "Anna génère un énorme mur de glace qui bouche les lignes de vue, empêche le déplacement et bloque les attaques. ",
          videodesc: video_ability_anna3
        }, {
          img: iconAbility4,
          titre: "Blizzard",
          desc: "Anna déploie un drone de modification du climat qui émet des bourrasques de vent et de neige dans une large zone. Les ennemis pris dans le blizzard sont ralentis et subissent des dégâts, et ceux qui s’attardent trop longtemps sont complètement gelés. ",
          videodesc: video_ability_anna4
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
export default Anna;
