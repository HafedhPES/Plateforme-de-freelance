import React from 'react'
import Input from "../form/Input"
import Select from "../form/Select"
export default function ({user,handlTypeChange}) {
  return (
    <section>
<Select label="Vous êtes..." onChange={handlTypeChange} className="registerSelect" value={user.type} >
<option value="">Sélectionner un type</option>
    <option value="client">Je suis un client: je cherche des des freelanceurs pour mes projets</option>
    <option value="freelaceur">Je suis un freelanceur: je cherche des projets à réaliser</option>
    </Select>
{user.type&& (<>

<Input type="email" label="Email *" className="registerInput"/>
    
<Input  label="Pseudo *" className="registerInput"/>
    
<Input type="password" label="Mot de passe" className="registerInput"/>
    
<Input type="password" label="Confirmer mot de passe" className="registerInput"/>

</>

)}
</section>
  )
}
