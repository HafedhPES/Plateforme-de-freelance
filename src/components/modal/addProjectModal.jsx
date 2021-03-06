import "./modal.css"
import StepZero from "./stepZero";
import {useState} from "react"
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";

import CloseIcon from '@mui/icons-material/Close';
export default function AddProjectModal({setShow}) {
    const [step,setStep]= useState(0);
    console.log(step);
  return (

    <div className="modal">
      <div className="closeIcon" onClick={()=>setShow(false)}>
      <CloseIcon fontSize="large" sx={{color:"white"}}/>
      </div>
       {step ==0 && <StepZero setStep={setStep}/>} 
       {step ==1 && <StepOne setStep={setStep}/>} 
       {step ==2 && <StepTwo setStep={setStep}/>} 
       {step ==3 && <StepThree />} 
       
    </div>
  )
}
