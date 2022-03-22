import React from 'react'
import "./logoutmodal.css"
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
export default function LogoutModal() {
  return (
    <div className='logout-modal'>
    
     <span className='logout-pseudo'>
         SnoussiDev
     </span>
     <div className="logout-menu">
        <div className="logout-menu-item ">
              <AccountBoxOutlinedIcon/><span className="item-text">Profile</span> 
        </div>
        <div className="logout-menu-item ">
              <DashboardCustomizeOutlinedIcon/> <span className="item-text">Taleau de bord</span> 
        </div>
        <span className="logout-button ">Déconnexion</span>
         
     </div>
     
     
  </div>
    
  )
}
