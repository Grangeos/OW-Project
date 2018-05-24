import React, { Component } from 'react';
import HeroComponent from "./HeroComponent";

import iconAbility1 from "../scss/picture/McCree/IconAbility.png";
import iconAbility2 from "../scss/picture/McCree/IconAbility1.png";
import iconAbility3 from "../scss/picture/McCree/IconAbility2.png";
import iconAbility4 from "../scss/picture/McCree/IconAbility3.png";
import McCreeVideo from "../scss/picture/McCree/VideoIntroMcCree.mp4";
import video_ability_mccree1 from "../scss/picture/McCree/video-ability_mccree1.mp4";
import video_ability_mccree2 from "../scss/picture/McCree/video-ability_mccree2.mp4";
import video_ability_mccree3 from "../scss/picture/McCree/video-ability_mccree3.mp4";
import video_ability_mccree4 from "../scss/picture/McCree/video-ability_mccree4.mp4";

class McCree extends Component {
    constructor(props, context) {
     super(props, context);

     this.state = {
       activeTab: -1
     };
   }

  setActiveTab(index) {
      if (this.state.activeTab === index) {
          this.setState({ activeTab: -1 });
      } else {
          this.setState({
              activeTab: index
          });
      }
    }

    render() {
        const { activeTab } = this.state;
        const data = {
          pers: "McCree",
          description: "Armé de son Pacificateur, McCree abat ses cibles avec une précision redoutable et se met à couvert plus vite que son ombre.",
          videoIntro: McCreeVideo,
          nom: "Jesse McCree",
          age: "37 ans",
          profession: "Chasseur de prime",
          baseOperation: "Santa Fe, Nouveau-Mexique, Etats-Unis",
          affiliation: "Overwatch ( anciennement )",
          skills: [
            {
  				img: iconAbility1,
  				titre: "PACIFICATEUR",
  				desc: "McCree tire avec son fidèle six-coups. Il peut aussi actionner directement le chien pour vider très rapidement tout son barillet.",
  				videodesc: video_ability_mccree1
  			},
  			{
  				img: iconAbility2,
  				titre: "ROULADE",
  				desc: "McCree plonge dans la direction de son déplacement et se redresse en ayant rechargé son revolver.",
  				videodesc: video_ability_mccree2
  			},
  			{
  				img: iconAbility3,
  				titre: "GRENADE FLASH",
  				desc: "McCree jette une grenade aveuglante qui explose peu après avoir quitté sa main. La déflagration étourdit les ennemis dans un petit rayon.",
  				videodesc: video_ability_mccree3
  			},
  			{
  				img: iconAbility4,
  				titre: "IMPLACABLE",
  				desc: "Concentration. Appréciation. Prise en main. McCree prend quelques précieux instants pour viser. Quand il se décide à tirer, il abat tous les ennemis dans son champ de vision. Plus ses cibles sont faibles, moins il aura besoin de viser pour que le tir soit mortel.",
  				videodesc: video_ability_mccree4
  			}
          ]
        }

        const { description, pers, videoIntro, nom, age, profession, baseOperation, affiliation, skills } = data;
        return(
          <HeroComponent {...data}/>

        );
    }
}
export default McCree;
