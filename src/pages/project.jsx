import ProjectContent from "../components/projectContent"
import RightBar from "../components/rightBar"
import SideBar from "../components/sideBar"
import TopBar from "../components/topbar"

export default function project() {
  return (
 <>
 <TopBar/>
 <div className="homeContainer flex-col">
 
 <ProjectContent/>
 
 </div>
 </>)
  
}
