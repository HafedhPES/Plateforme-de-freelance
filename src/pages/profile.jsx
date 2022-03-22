import ProfileContent from "../components/profileContent"
import TopBar from "../components/topbar"

export default function Profile({logout,setLogout}) {
  return (
 <>
 <TopBar logout={logout} setLogout={setLogout}/>
 <div onClick={()=>setLogout(false)} className="homeContainer flex-col">
 
 
 <ProfileContent/>
 </div>
 </>)
  
}
