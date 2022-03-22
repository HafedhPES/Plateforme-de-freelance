import WebIcon from '@mui/icons-material/Web';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function homeProject({setPostuler}) {
  return <div className="projectContainer">
  <div className="projectIcon">
     <div className="projectIconContainer">
        <WebIcon fontSize="large" color="action"/>
     </div>
  </div>
  <div className="projectContent">
   <div className="projectContentHeader">
   <span className="projectTitle"> <h5>Création site web pour une asbl </h5> </span>
   <span className="projectDate"> Déposé le 31/01/22 19:41 </span>
  <div className="projectUpdate">
   <MoreVertIcon />
   </div>

   </div>
   <div className="projectContentStatus">
   <ToggleOnIcon color="success"/>
   Ouvert • Moins de 500 € • 22 offres • 
   </div>
   <div className="projectContentText">
   Nous sommes sur un projet de création d’une ASBL  but de promouvoir des jeunes talent et pour tous les artistes à la recherche des locaux et de d’avantage de visibilité. Nous aurons besoin d’un site web dyn...
   </div>
   <div className="projectContentKeyWord">
  <div className="projectTag"> Création de site internet</div> 
  <div className="projectTag"> Wordpress</div> 
  <div className="projectTag"> Création de site internet</div> 
  <div className="projectTag"> Création de site internet</div> 
  <div className="projectTag"> Création de site internet</div> 
  <div className="projectTag"> Création de site internet</div> 
  <div className="projectTag"> Création de site internet</div> 
   </div>
   <div  className="projectButton">
   <button onClick={()=>(true)} className="postulerButton"> Postuler</button>
   </div>
  </div>
</div>
;
}
