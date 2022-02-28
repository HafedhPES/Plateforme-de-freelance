import React from 'react'

export default function stepOne() {
  return (
    <section>
<div className="flex-col mb10">
    <label className="mb10">Nom *</label>
    <div className="flex-row">
    <input type= "text" className="registerInput" />
    
    </div>
    
</div> 

    

<div className="flex-col mb10">
    <label className="mb10">Prénom *</label>
    <div className="flex-row">
    <input type="text" className="registerInput" />
    
    </div>
    
</div> 
<div className="flex-col mb10">
    <label className="mb10">Tel </label>
    <div className="flex-row">
    <input type="text" className="registerInput" />
    
    </div>
    
</div> 
<div className="flex-col mb10">
    <label className="mb10">Gouvernorat *</label>
    <div className="selectContainer">
    <select className="registerSelect">
        <option value="">Sélectionner un gouvernorat</option>
        <option value="client">Nabeul</option>
        <option value="client">Tunis</option>
        <option value="client">Sousse</option>
        <option value="client">Monastir</option>
        <option value="client">Sfax</option>
        <option value="client">Kef</option>
        <option value="client">Beja</option>
        <option value="client">Zaghouene</option>
        <option value="client">Kairouan</option>
        <option value="client">Sidi Bouzid</option>
       
        <option value="client">Bizerte</option>
        <option value="client">Gabes</option>
        <option value="client">Gafsa</option>
        <option value="client">Kébili</option>
        <option value="client">Mahdia</option>
        <option value="client">Mednine</option>
        <option value="client">Tataouine</option>
        <option value="client">Tozeur</option>
        <option value="client">Siliana</option>
        <option value="client">Kasserine</option>
    </select>
    <span class="rowselect"></span>
    </div>
    
</div> 
<div className="flex-col mb10">
    <label className="mb10">Ville *</label>
    <input type="text" className="registerInput" />
    </div>
    
</section>
  )
}
