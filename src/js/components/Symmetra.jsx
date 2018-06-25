import React, {Component} from 'react';
import HeroComponent from "./HeroComponent";

import iconAbility1 from "../../scss/picture/Symmetra/IconAbility.png";
import iconAbility2 from "../../scss/picture/Symmetra/IconAbility1.png";
import iconAbility3 from "../../scss/picture/Symmetra/IconAbility2.png";
import iconAbility4 from "../../scss/picture/Symmetra/IconAbility3.png";
import iconAbility5 from "../../scss/picture/Symmetra/IconAbility4.png";
import SymmetraVideo from "../../scss/picture/Symmetra/VideoIntroSymmetra.mp4";
import video_ability_Symmetra1 from "../../scss/picture/Symmetra/video-ability_symmetra1.mp4";
import video_ability_Symmetra2 from "../../scss/picture/Symmetra/video-ability_symmetra2.mp4";
import video_ability_Symmetra3 from "../../scss/picture/Symmetra/video-ability_symmetra3.mp4";
import video_ability_Symmetra4 from "../../scss/picture/Symmetra/video-ability_symmetra4.mp4";
import video_ability_Symmetra5 from "../../scss/picture/Symmetra/video-ability_symmetra5.mp4";
import Test from "../../scss/picture/McCree/test.jpg";

class Symmetra extends Component {
  render() {
    const data = {
      pers: "Symmetra",
      description: "Symmetra utilise son projecteur de rayons pour éliminer ses adversaires, protéger ses alliés, placer des téléporteurs et déployer des tourelles sentinelles à particules.",
      videoIntro: SymmetraVideo,
      nom: "Satya Vaswani",
      age: "28  ans",
      profession: "architecte",
      baseOperation: "Utopée, Inde",
      affiliation: "Vishkar Corporation",
      skills: [
        {
          img: iconAbility1,
          titre: "PROJECTEUR À PHOTONS",
          desc: "L’arme de Symmetra émet un rayon à courte portée qui se focalise sur un ennemi proche, lui infligeant des dégâts continus qui augmentent sur la durée. Le projecteur peut aussi envoyer une boule d’énergie surchargée qui inflige des dégâts importants.",
          videodesc: video_ability_Symmetra1
        }, {
          img: iconAbility2,
          titre: "TOURELLE SENTINELLE",
          desc: "Symmetra installe une petite tourelle qui projette automatiquement des décharges réduisant la vitesse de l’ennemi le plus proche à sa portée. Plusieurs tourelles peuvent être déployées simultanément sur le champ de bataille.",
          videodesc: video_ability_Symmetra2
        }, {
          img: iconAbility3,
          titre: "ÉCRAN PHOTONIQUE",
          desc: "Symmetra enveloppe un allié dans un bouclier photoformé qui absorbe les dégâts en suivant l’allié qu’il protège.",
          videodesc: video_ability_Symmetra3
        }, {
          img: iconAbility4,
          titre: "TÉLÉPORTEUR",
          desc: "Symmetra place un socle d’arrivée à sa position actuelle et le connecte à celui placé au point de départ de son équipe. Les alliés peuvent voyager instantanément d’un socle à l’autre, ce qui leur permet de retourner rapidement au combat après avoir été abattus.",
          videodesc: video_ability_Symmetra4
        }, {
          img: iconAbility5,
          titre: "GÉNÉRATEUR DE BOUCLIER",
          desc: "Symmetra déploie un générateur à grande portée qui fournit des boucliers à toute son équipe",
          videodesc: video_ability_Symmetra5
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
export default Symmetra;
