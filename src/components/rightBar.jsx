import AddProjectModal from "../components/modal/addProjectModal"
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
export default function RightBar() {
  const [show,setShow]= useState(false)
console.log("show",show);
  return <div className="rightBar">
     <div className="rbWrapper">
        
       <button className='addProject' onClick={()=>setShow(true)}> <AddIcon/> <span>Ajouter un Projet </span> </button>
     {show && <AddProjectModal setShow={setShow}/>}
     </div>
  </div>;
}
