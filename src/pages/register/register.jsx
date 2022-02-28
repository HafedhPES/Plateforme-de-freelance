import TopBar from "../../components/topbar";
import RightRegister from '../../components/register/rightRegister'
import StepOne from '../../components/register/stepOne'
import StepZero from '../../components/register/stepZero'
import StepTwo from '../../components/register/stepTwo'
import ArrowSteps from "../../components/arrowSteps/ArrowSteps";
import "./register.css";
import {useState} from "react";

export default function Register(){

    const [user,setUser]= useState({
        type:""
    });

 const [step,setStep]=useState(0);
 const [maxSteps,setMaxSteps]=useState(0);
 const handlTypeChange=(e)=>{
     e.target.value=='client'? setMaxSteps(1):setMaxSteps(2);
     setUser({...user,type:e.target.value})

 }
const renderButton=()=>{

if (step<maxSteps){
    return (
        <input className="postulerButton" type="button" onClick={()=>{setStep(step+1)}} value="Suivant"/>
    )}
    else if (step==maxSteps){
        return (
            <input type="button" className="postulerButton"  value="S'inscrire"/>
        )
    }
    else{
        return undefined;
    }
    }

    return(
<>

<div className="allContainer">
<TopBar/>
<div className="registerContainer">
<div className="mainRegister">
    
    <div className="formContainer">
<h3  className="mb10">Créer un compte gratuitement</h3>
<form>
{step==0&&(
<StepZero user={user} handlTypeChange={handlTypeChange} />
)}
{step==1&&(
<StepOne/>
)}
{step==2&&(
<StepTwo/>
)}
<div className="flex-row jcc">
    {
        user.type&&
    renderButton()
    }   
</div>
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