
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import Offer from '@mui/icons-material/DynamicFeed';
import OfferSm from './offerSm';






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
        



        
        <Offer color="info"/>
        <span className="offers">21 Offres </span>
   </div>

     
  </div>
  <div className="dprojectContent">
  <div className="dprojectMainContent">
 
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

<div className="offersWrapper">
<span className="offersTitle">
  Les offres: 
</span>
< OfferSm/>
< OfferSm/>
< OfferSm/>
< OfferSm/>
< OfferSm/>
< OfferSm/>
< OfferSm/>


</div>
</div>
<div className="dprojectLeftContent">
  <div className="card1">
<div className="card1Header">
<img src="/assets/template/postoffer.jpg" alt="Photo de profil" className="card1Img" />
</div>
<div className="card1Body">
<span className="card1Title">
  Pas Trop Tard !
</span>
<span className='card1Text'>
Le client étudie encore ses offres. on te conseille de les consulter afin de présnter l'offre la plus pertinente 
</span>
<div className="card1ButtonDiv">
  <button className="card1Button"> Postuler</button>
</div>
</div>
</div>

</div>
</div>
  </div>)
  ;
}
