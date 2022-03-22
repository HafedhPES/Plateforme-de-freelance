import {Link } from "react-router-dom";
import Search from '@mui/icons-material/Search';
import Notif from '@mui/icons-material/NotificationsNone';
import NotifModal from "./NotifModal/NotifModal";
import LogoutModal from "./logoutModal/LogoutModal"
import { useState } from "react";
//import Search from '@mui/icons-material/SearchOutlined';
export default function Topbar({logout,setLogout}) {
  const [showNotif,setShowNotif]=useState(false);
  return (<div className="topbarContainer">
    
    <div className="topbarLeft">
     <Link to="/"> <span className="logo">FreeLanci.tn</span></Link>
    </div>
    <div className="topbarCenter">
      <div className="searchBar">
       <Search className="searchIcon"/>
       <input placeholder='Chercher un projet à réaliser' className="searchInput" />
      </div>
    </div>
    <div className="topbarRight">
     <div className="topbarLinks">
       <span className="topbarLink">Accueil</span>
       <span className="topbarLink">Contact</span>
     </div>
     <div className="topbarIcons">
       <div className="topbarIcon" onClick={()=>setShowNotif(!showNotif)}>
         <Notif/>
         <span className="badgeNotif">1</span>
         
       </div>
       <div className="notifmodal">
       {showNotif &&<NotifModal/>}
       </div>
       
     </div>
     <img onClick={()=>setLogout(!logout)} src="/assets/person/1.jpeg" alt="Photo de profil" className="topbarImg" />
     {logout&& <LogoutModal/>}
    </div>
     
  </div>);
}
