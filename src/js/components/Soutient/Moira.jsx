import React, {Component} from 'react';
import HeroComponent from "../HeroComponent";

import iconAbility1 from "../../../scss/picture/Moira/IconAbility.png";
import iconAbility2 from "../../../scss/picture/Moira/IconAbility1.png";
import iconAbility3 from "../../../scss/picture/Moira/IconAbility2.png";
import iconAbility4 from "../../../scss/picture/Moira/IconAbility3.png";
import MoiraVideo from "../../../scss/picture/Moira/VideoIntroMoira.mp4";
import video_ability_moira1 from "../../../scss/picture/Moira/video-ability_moira1.mp4";
import video_ability_moira2 from "../../../scss/picture/Moira/video-ability_moira2.mp4";
import video_ability_moira3 from "../../../scss/picture/Moira/video-ability_moira3.mp4";
import video_ability_moira4 from "../../../scss/picture/Moira/video-ability_moira4.mp4";
import Test from "../../../scss/picture/McCree/test.jpg";

class Moira extends Component {
  render() {
    const data = {
      pers: "Moira",
      description: "Les capacités biotiques de Moira lui permettent de contribuer aux soins prodigués ou aux dégâts infligés dans n’importe quelle situation. D’un coté, son emprise biotique lui permet d’intervenir à courte portée, de l’autre, son orbe biotique peut infliger des dégâts ou prodiguer des soins à longue distance. Elle peut également utiliser Volatilité pour échapper à des groupes d’ennemis ou rester à portée de ses alliés nécessitant son aide. Une fois Coalescence chargée, Moira peut éviter la mort à plusieurs alliés en même temps ou donner le coup de grâce à des ennemis déjà affaiblis.",
      videoIntro: MoiraVideo,
      nom: "Moira O’Deorain",
      age: "48 ans",
      profession: "généticienne",
      baseOperation: " Dublin, Irlande ; Oasis, Irak",
      affiliation: "La Griffe, Blackwatch (anciennement)",
      skills: [
        {
          img: iconAbility1,
          titre: "EMPRISE BIOTIQUE",
          desc: "De sa main gauche, Moira projette de l’énergie biotique qui soigne les alliés devant elle. Sa main droite génère un rayon à longue portée qui sape la vitalité des ennemis tout en soignant Moira et en rechargant son énergie biotique.",
          videodesc: video_ability_moira1
        }, {
          img: iconAbility2,
          titre: "ORBE BIOTIQUE",
          desc: "Moira lance une sphère biotique rebondissante. Elle peut lui affecter un effet régénérant qui soigne les alliés qu’elle traverse, ou un effet nécrosant qui inflige des dégâts aux ennemis.",
          videodesc: video_ability_moira2
        }, {
          img: iconAbility3,
          titre: "VOLATILITÉ",
          desc: "Moira se téléporte rapidement à une courte distance.",
          videodesc: video_ability_moira3
        }, {
          img: iconAbility4,
          titre: "COALESCENCE",
          desc: "Moira canalise un rayon à longue portée qui soigne ses alliés et inflige des dégâts à ses ennemis même à travers les écrans.",
          videodesc: video_ability_moira4
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
export default Moira;
