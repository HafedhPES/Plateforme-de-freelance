import {Link } from "react-router-dom";
import Search from '@mui/icons-material/Search';
import Notif from '@mui/icons-material/NotificationsNone';
//import Search from '@mui/icons-material/SearchOutlined';
export default function topbar() {
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
       <div className="topbarIcon">
         <Notif/>
         <span className="badgeNotif">1</span>
       </div>
     </div>
     <img src="/assets/person/1.jpeg" alt="Photo de profil" className="topbarImg" />
    </div>
     
  </div>);
}
