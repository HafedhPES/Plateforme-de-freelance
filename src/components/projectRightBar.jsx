

export default function projectRightBar({postuler,setPostuler}) {
  return (
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
  <button onClick={()=>setPostuler(true)} className="card1Button"> Postuler</button>
</div>
</div>
</div>

<div className="container third flex-col mt10 mr10 aic jcc deposerCard">
  <span className='clr5 sz2 fw600 '>Déposér Gratuitement votre projet </span>
  <button className="btnsm clr5 secondary mt10 "> Ajouter </button>
  
</div>

</div>

  );
}
