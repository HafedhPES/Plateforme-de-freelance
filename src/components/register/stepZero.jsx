import React from 'react'

export default function ({user,handlTypeChange}) {
  return (
    <section>
<div className="flex-col mb10">
    <label className="mb10">Vous êtes *</label>
    <div className="selectContainer">
    <select value ={user.type} className="registerSelect" onChange={handlTypeChange}>
        <option value="">Choisissez un type...</option>
        <option value="client">Je suis un client: j'ai un projet faire réaliser</option>
        <option value="freelanceur">Je suis un freelanceur: je cherche des projets à réaliser</option>
    </select>
    <span class="rowselect"></span>
    </div>
    
</div>
{user.type&& (<>

<div className="flex-col mb10 ">
    <label className="mb10">Email *</label>
    <div class="flex-row">
    <input type= "texte" className="registerInput"/>
    
    </div>
    
</div>
<div className="flex-col mb10">
    <label className="mb10">Pseudo *</label>
    <div className="flex-row">
    <input type= "texte" className="registerInput"/>
    
    </div>
    
</div>

<div className="flex-col mb10">
    <label className="mb10">Mot de passe *</label>
    <div className="flex-row">
    <input type= "password" className="registerInput" />
    
    </div>
    
</div>
<div className="flex-col mb10">
    <label className="mb10">Confirmer mot de passe *</label>
    <div className="flex-row">
    <input type= "password" className="registerInput" />
    
    </div>
    
</div>
</>

)}
</section>
  )
}
