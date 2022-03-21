import React from 'react'
import "./notifmodal.css"
export default function NotifModal() {
  return (
    <div className='notif-modal'>
    
     <span className="title">Notifications</span>
     <div className="notification">
     <span className="notif-content">
         Devmaster a postulé une nouvelle offre
     </span>
     <span className='notif-ago'>
         Il y'a une heure
     </span>
     </div>
     <div className="notification">
     <span className="notif-content">
         Devmaster a postulé une nouvelle offre
     </span>
     <span className='notif-ago'>
         Il y'a une 7 heures
     </span>
     </div>
     <div className="notification">
     <span className="notif-content">
         Snoussinho a postulé une nouveau projet
     </span>
     <span className='notif-ago'>
         Il y'a un jour
     </span>
     </div>
     
     
  </div>
    
  )
}
