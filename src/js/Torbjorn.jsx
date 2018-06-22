import React, {Component} from 'react';
import HeroComponent from "./HeroComponent";

import iconAbility1 from "../scss/picture/Torbjorn/iconAbility.png";
import iconAbility2 from "../scss/picture/Torbjorn/iconAbility1.png";
import iconAbility3 from "../scss/picture/Torbjorn/iconAbility2.png";
import iconAbility4 from "../scss/picture/Torbjorn/iconAbility3.png";
import iconAbility5 from "../scss/picture/Torbjorn/iconAbility4.png";
import TorbjornVideo from "../scss/picture/Torbjorn/VideoIntroTorbjorn.mp4";
import video_ability_Torbjorn1 from "../scss/picture/Torbjorn/video-ability_torbjorn1.mp4";
import video_ability_Torbjorn2 from "../scss/picture/Torbjorn/video-ability_torbjorn2.mp4";
import video_ability_Torbjorn3 from "../scss/picture/Torbjorn/video-ability_torbjorn3.mp4";
import video_ability_Torbjorn4 from "../scss/picture/Torbjorn/video-ability_torbjorn4.mp4";
import video_ability_Torbjorn5 from "../scss/picture/Torbjorn/video-ability_torbjorn5.mp4";

class Torbjorn extends Component {
  render() {
    const data = {
      pers: "Torbjörn ",
      description: "L’incroyable arsenal de Torbjörn comprend un pistolet à rivets et un marteau, ainsi qu’une forge personnelle servant à construire ou améliorer des tourelles et à distribuer des modules d’armure.",
      videoIntro: TorbjornVideo,
      nom: "Torbjörn Lindholm",
      age: "57 ans",
      profession: "fabricant d’armes",
      baseOperation: "Göteborg, Suède",
      affiliation: "Overwatch (anciennement)",
      skills: [
        {
          img: iconAbility1,
          titre: "PISTOLET À RIVETS",
          desc: "Avec son pistolet, Torbjörn tire des rivets à longue portée ou des projectiles de métal surchauffé en petites rafales à courte portée.",
          videodesc: video_ability_Torbjorn1
        }, {
          img: iconAbility2,
          titre: "MARTEAU DE FORGE",
          desc: "Torbjörn utilise son marteau polyvalent pour construire, améliorer et réparer des tourelles, et peut l’utiliser comme arme en cas d’urgence.",
          videodesc: video_ability_Torbjorn2
        }, {
          img: iconAbility3,
          titre: "DÉPLOIEMENT DE TOURELLE",
          desc: "Torbjörn construit un canon automatique avec un système de suivi des ennemis. Il peut utiliser la ferraille récupérée sur les ennemis ou alliés abattus pour l’améliorer, augmentant ses points de vie et y ajoutant un second canon et un lance-roquettes.",
          videodesc: video_ability_Torbjorn3
        }, {
          img: iconAbility4,
          titre: "MODULE D’ARMURE",
          desc: "Torbjörn fabrique des pièces d’armure que lui-même ou ses alliés peuvent ramasser pour absorber une partie des dégâts.",
          videodesc: video_ability_Torbjorn4
        }, {
          img: iconAbility5,
          titre: "CŒUR DE MAGMA",
          desc: "Déclencher la surchauffe de sa forge personnelle permet à Torbjörn de gagner une quantité significative d’armure et de ferraille, mais aussi d’attaquer (et de construire ou de réparer des tourelles) bien plus rapidement qu’en temps normal.",
          videodesc: video_ability_Torbjorn5
        }
      ]
    }


    return (
      <HeroComponent {...data}/>
    );
  }
}
export default Torbjorn;
