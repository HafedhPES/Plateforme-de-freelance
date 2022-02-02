
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import Offer from '@mui/icons-material/DynamicFeed';
import { SpaceBarOutlined } from '@mui/icons-material';
export default function projectContent() {
  return (
    <div className='dproject'> 
  <div className="dprojectTop">
   <span className="dprojectTopTitle">
   Création d'un logo pour une création d'une micro-creche
   </span>
   <div className="dprojectTopfooter">
        <ToggleOnIcon color="success"/>
        <span className="statusText">Ouvert</span>
        <Offer color="secondary"/>
        <span className="offers">21 Offres </span>
   </div>

     
  </div>
  <div className="dprojectCenter">
  Bonjour,
Je suis en train de créer mon projet de micro-crèche. J'ai donc besoin de réaliser le logo de mon entreprise.
J'ai une idée assez précise de ce que je souhaite mais je suis tout de même ouverte à des propositions. Le design devra être assez épuré et le style en relation directe avec l'univers de la petite enfance sans être trop niais.
Dans un second temps j'aurai peut être besoin de devolopper mon identité visuelle.
Seriez-vous intéressée par le projet ? Pourrions nous échanger par un autre biais afin de rentrer plus dans les détails ?
Merci d'avance.
Deborah

  </div>
<div className="projectTable">
<table className="dptab">
    
    <tbody>
        <tr>
            <td className='dptaptd1'>Budget</td>
            <td className='dptaptd2'>Entre 10 et 50 DT</td>
        </tr>
        <tr>
            <td className='dptaptd1'>Publié le</td>
            <td className='dptaptd2'>02 Février 2022</td>
        </tr>
    </tbody>
</table>

</div>
<div className="projectProfile">
    
<span className="profileText"> Profils recherchés :</span>
<div className="tags">
<span className='projectTag'>  Graphiste Spécialisé En Création De Logo  </span>
<span className='projectTag'>  Graphiste Spécialisé En Création De Logo  </span>
</div>
</div>


  </div>)
  ;
}
