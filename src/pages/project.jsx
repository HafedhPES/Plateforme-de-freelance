import ProjectContent from "../components/projectContent"
import RightBar from "../components/rightBar"
import SideBar from "../components/sideBar"
import TopBar from "../components/topbar"

export default function project({postuler,setPostuler,logout,setLogout}) {
  return (
 <>
 <TopBar logout={logout} setLogout={setLogout}/>
 <div className="homeContainer flex-col">
 
 <ProjectContent postuler={postuler} setPostuler={setPostuler}/>
 
 </div>
 </>)
  
}
