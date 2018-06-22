import React from 'react';
import HeroComponent from "./HeroComponent";

import iconAbility1 from "../../scss/picture/chopper/IconAbility.png";
import iconAbility2 from "../../scss/picture/chopper/IconAbility1.png";
import iconAbility3 from "../../scss/picture/chopper/IconAbility2.png";
import iconAbility4 from "../../scss/picture/chopper/IconAbility3.png";
import ChopperVideo from "../../scss/picture/chopper/VideoIntroChopper.mp4";
import video_ability_chopper1 from "../../scss/picture/chopper/video-ability.mp4";
import video_ability_chopper2 from "../../scss/picture/chopper/video-ability (1).mp4";
import video_ability_chopper3 from "../../scss/picture/chopper/video-ability (2).mp4";
import video_ability_chopper4 from "../../scss/picture/chopper/video-ability (3).mp4";
import Test from "../../scss/picture/McCree/test.jpg";

class Chopper extends React.Component {
  render() {
		const data = {
      pers: "Chopper",
      description: "Avec son emblématique traquelard, Chopper attrape et attire ses ennemis avant de les réduire en miettes d’un coup de déferrailleur. Il est assez robuste pour survivre à de lourds dégâts, et peut récupérer ses points de vie grâce à son inhalateur.",
      videoIntro: ChopperVideo,
      nom: "░░░░░░",
      age: "30 ans",
      profession: "Hackeuse",
      baseOperation: "Dorado, Mexique",
      affiliation: "la Griffe, Los Muertos (anciennement)",
      skills: [
        {
          img: iconAbility1,
          titre: "DÉFERRAILLEUR",
					desc: "Le déferrailleur de Chopper lance du shrapnel à courte portée mais sur une large zone. Sinon il peut lancer une boule de shrapnels qui détone plus loin, éparpillant les fragments métalliques depuis le point d’impact.",
	        videodesc: video_ability_chopper1
        }, {
          img: iconAbility2,
          titre: "INHALATEUR",
					desc: "Chopper récupère une partie de ses points de vie sur une courte période.",
	        videodesc: video_ability_chopper2
        }, {
          img: iconAbility3,
          titre: "TRAQUELARD",
					desc: "Chopper lance sa chaîne vers une cible ; s’il l’attrape, il l’attire à lui, à courte portée.",
	        videodesc: video_ability_chopper3
        }, {
          img: iconAbility4,
          titre: "ÉQUARISSEUR",
					desc: "Après avoir ajouté un chargeur supplémentaire au-dessus de son déferrailleur, Chopper le bourre de munitions. Pendant une courte période, il mitraille une large zone devant lui avec des shrapnels qui repoussent les ennemis.",
	        videodesc: video_ability_chopper4
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

export default Chopper;
