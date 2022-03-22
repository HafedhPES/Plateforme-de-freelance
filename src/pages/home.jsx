import MainContent from "../components/mainContent"
import RightBar from "../components/rightBar"
import SideBar from "../components/sideBar"
import TopBar from "../components/topbar"

export default function Home({postuler,setPostuler,logout,setLogout}) {
  return (
 <>
 <TopBar logout={logout} setLogout={setLogout}/>
 <div className="homeContainer flex-row">
 <SideBar/>
 <MainContent postuler={postuler} setPostuler={setPostuler}/>
 <RightBar/>
 </div>
 </>)
  
}
