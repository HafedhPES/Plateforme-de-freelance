import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faMoneyBillAlt } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function offerSm() {
  return (
  <div className="offersmContainer">
  <div className="offersmHeader">
    Offre poubliée le 03/02/2022 par:
  </div>
  <div className="offersmContent">
<div className="offersmImg">
<img src="/assets/person/1.jpeg" alt="Photo de profil" className="offersmOwnerImg" />
</div>
<div className="offersmBody">
<span className="offersmOwner">SnoussiDev</span>
<div className="offersOwnerCity">
<FontAwesomeIcon icon={faMapMarker} /><span className='city'>Nabeul </span> 
</div>
<div className="offersmEval">
<span className="star">
<FontAwesomeIcon size='sm' color="white" icon={faStar}/>
</span>
<span className="star">
<FontAwesomeIcon size='sm' color="white" icon={faStar}/>
</span>
<span className="star">
<FontAwesomeIcon size='sm' color="white" icon={faStar}/>
</span>
<span className='evalCount'>
(5 Evaluations)
</span>
</div>
</div>
<div className="offersmDetails">
<div className='separatorDiv'><FontAwesomeIcon icon={faClock} /> <span className="iconText">30 jours </span></div>
<div><FontAwesomeIcon  icon={faMoneyBillAlt } /> <span className="iconText"> 30 DT </span></div>
</div>
</div>
</div>)

}
