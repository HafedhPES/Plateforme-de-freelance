import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import MoreVertIcon from '@mui/icons-material/MoreVert';
export default function profileContent() {
  return (<>
    
      <div className="profileWrapper ut1 flex-col">
       
       <div className=" flex-col ut2 third">
           
       </div>
       <div className=" flex-row ut5 fifth">
       <div className=" flex-col ut3 fifth ml20">
         <div className="flex-row ut3">
         <img src="/assets/person/8.jpeg" className="avatar3 ut1" ></img>
         <div className="evalBprofile ut5">
<span className="bigStar primary">
<FontAwesomeIcon size="sm" color="white" icon={faStar}/>
</span>
<span className="bigStar primary">
<FontAwesomeIcon size='sm' color="white" icon={faStar}/>
</span>
<span className="bigStar primary">
<FontAwesomeIcon size='sm' color="white" icon={faStar}/>
</span>
<span className="bigStar primary">
<FontAwesomeIcon size='sm' color="white" icon={faStar}/>
</span>
<span className="bigStar primary">
<FontAwesomeIcon size='sm' color="white" icon={faStar}/>
</span>
<span className='evalCount'>
(5 Evaluations)
</span>
</div>
         </div>
         <div className="flex-col ut6">
       
       <div className="profileLogin fw600">
         SnoussiDev
       </div>
       <div className="profileAct fw600">
         Développeur web
       </div>
       <div className="profileAct sz1 ">
         <FontAwesomeIcon className="mr5" icon={faMapMarkerAlt} />
         <span>Nabeul</span>
       </div>
       </div>
       </div>
       <div className=" flex-row aic ut4">
       <span className='tag sz1 clr5 fw600'>  AngularJS </span>
       <span className='tag sz1 clr5 fw600'>  MongoDb </span>
       <span className='tag sz1 clr5 fw600'>  ExpressJs</span>
       <span className='tag sz1 clr5 fw600'>  Css</span>
       <span className='tag sz1 clr5 fw600'>  Html5 </span>
       
       </div>
       <div className="ut1 flex-row jfe mr15 mt5">
         <MoreVertIcon/>
         </div>
       </div>

       <div className=" flex-col ut7">
             
             </div>
     

      </div></>
  )
}
