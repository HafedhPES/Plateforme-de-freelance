import AddProjectModal from "../components/modal/addProjectModal"
import AddIcon from '@mui/icons-material/Add';
export default function rightBar() {
  return <div className="rightBar">
     <div className="rbWrapper">
        
       <button className='addProject'> <AddIcon/> <span>Ajouter un Projet </span> </button>
      <AddProjectModal/>
     </div>
  </div>;
}
