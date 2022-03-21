import MainContent from "../components/mainContent"
import RightBar from "../components/rightBar"
import SideBar from "../components/sideBar"
import TopBar from "../components/topbar"

export default function home({postuler,setPostuler}) {
  return (
 <>
 <TopBar/>
 <div className="homeContainer flex-row">
 <SideBar/>
 <MainContent postuler={postuler} setPostuler={setPostuler}/>
 <RightBar/>
 </div>
 </>)
  
}
