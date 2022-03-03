import "./modal.css"
import StepZero from "./stepZero";
import {useState} from "react"
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";

export default function AddProjectModal() {
    const [step,setStep]= useState(0);
    console.log(step);
  return (
    <div className="modal">
       {step ==0 && <StepZero setStep={setStep}/>} 
       {step ==1 && <StepOne setStep={setStep}/>} 
       {step ==2 && <StepTwo setStep={setStep}/>} 
    </div>
  )
}
