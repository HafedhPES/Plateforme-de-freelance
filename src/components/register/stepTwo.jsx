import React from 'react'

export default function stepTwo() {
  return (
    <section>
<div className="flex-col mb10">
    <label className="mb10">Photo de profil </label>
    <div className="flex-row">
    <input type= "upload" className="registerInput" />
    
    </div>
    
</div> 
<div className="flex-col mb10">
    <label className="mb10">Secteur d'activitée *</label>
    <div className="selectContainer">
    <select className="registerSelect">
        <option value="">Choisissez un secteur...</option>
        <option value="client">Développeur web Fullstcak</option>
        <option value="client">Développeur web Frontend</option>
        <option value="client">Développrur web Backend</option>
        <option value="client">Infographiste</option>
        <option value="client">Traducteur</option>
        <option value="client">Statiticien</option>
        <option value="client">Agent bureautique</option>
        <option value="client">Digital Marketting</option>
    </select>
    <span class="rowselect"></span>
    </div>
    
</div>
<div className="flex-col mb10">
    <label className="mb10">Présentation *</label>
    <div className="flex-row">
    <textarea className="registerInput" />
    
    </div>
    
</div> 
<div className="flex-col mb10">
    <label className="mb10">Formation *</label>
    <div className="flex-row">
    <input type="text" className="registerInput" />
    
    </div>
    
</div> 
<div className="flex-col mb10">
    <label className="mb10">Mots clés *</label>
    <div className="flex-row">
    <input type="text" className="registerInput" />
    
    </div>
    
</div> 
</section>
  )
}
