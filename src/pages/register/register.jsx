import TopBar from "../../components/topbar";
import RightRegister from '../../components/register/rightRegister'
import ArrowSteps from "../../components/arrowSteps/ArrowSteps";
import "./register.css";
import {useState} from "react";

export default function Register(){

    const [user,setUser]= useState({
        type:""
    });
console.log(user.type);
    
    return(
<>

<div className="allContainer">
<TopBar/>
<div className="registerContainer">
<div className="mainRegister">
    <div className="stepsContainer">
    <ArrowSteps />
       
    </div>
    <div className="formContainer">
<h3  className="mb10">Créer un compte gratuitement</h3>
<form>
<div className="flex-col mb10">
    <label className="mb10">Vous êtes *</label>
    <div className="selectContainer">
    <select className="registerSelect" onChange={(e)=>setUser({...user,type:e.target.value})}>
        <option value="">Choisissez un type...</option>
        <option value="client">Je suis un client: j'ai un projet faire réalise</option>
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

</form>
</div>
</div>
<div className="rightRegister">
    <RightRegister/>
</div>

</div>
</div>


</>)
}