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
      description: "L’arsenal polyvalent d’Ana lui permet de soigner et de renforcer ses alliés à distance, tandis que son fusil biotique, ses fléchettes tranquillisantes et ses grenades biotiques neutralisent quiconque menace ses camarades.",
      videoIntro: AnnaVideo,
      nom: "Ana Amari",
      age: "60  ans",
      profession: "chasseuse de primes",
      baseOperation: "Le Caire, Égypte",
      affiliation: "Overwatch (anciennement)",
      skills: [
        {
          img: iconAbility1,
          titre: "Fusil biotique",
          desc: "Le fusil d’Ana projette des fléchettes qui régénèrent les points de vie de ses alliés ou infligent des dégâts continus à ses ennemis. La lunette de son fusil lui permet de zoomer sur ses cibles pour des tirs d’une extrême précision.",
          videodesc: video_ability_anna1
        }, {
          img: iconAbility2,
          titre: "Fléchette hypodermique",
          desc: "Ana tire une fléchette avec son arme de poing, provoquant l’évanouissement d’un ennemi (qui se réveille s’il subit des dégâts).",
          videodesc: video_ability_anna2
        }, {
          img: iconAbility3,
          titre: "Grenade biotique",
          desc: "Ana lance une bombe biotique qui inflige des dégâts aux ennemis et soigne les alliés dans une zone de taille réduite. Pendant un court moment, les alliés affectés reçoivent plus de soins de toutes les sources, tandis que les ennemis pris dans l’explosion ne peuvent temporairement plus être soignés.",
          videodesc: video_ability_anna3
        }, {
          img: iconAbility4,
          titre: "Nanoboost",
          desc: "Lorsqu’ils reçoivent un bonus de combat de la part d’Ana, ses alliés infligent plus de dégâts et résistent mieux aux attaques ennemies.",
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
