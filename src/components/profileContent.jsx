import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import MoreVertIcon from '@mui/icons-material/MoreVert';
export default function profileContent() {
  return (<>
    
      <div className="profileWrapper  flex-col">
       
       <div className="flex-col ut3 third cover">
          
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
        {/*   Contenu principal */ }   
       <div className=" flex-row ut7 ">
        {/*   left content */ }    
         <div className="leftProfile flex-col ut7">
           {/*   Pesentation */ }    
           <div className="container  flex-col ml20 mt20">
             <span className="fw600 sz2">Présentation</span>
             <span className="mt10 sz2">
             Nous sommes Emeraude IT, ESN multinationale ayant deux sièges à Tunis et à Paris. Nous sommes spécialisés dans la réalisation de solutions entreprises et la maintenance de systèmes d'information avec 11 ans d'expérience.
Notre équipe est composée de chefs de projets, d'ingénieurs d'étude et de développeurs confirmés rigoureux, motivés et disponibles pour des nouveaux défis.


             </span>
           </div>
           {/*   Projets réalisés */ }    
           <div className="container mt20 ml20 flex-com">
           <span className="fw600 sz2">Projets réalisés</span>
           <div className="profileProjects flex-col mt10">
            <span className="clr3 sz2 fw600">
            Création site web pour une asbl
            </span>
            <span className="sz2 mt5">
            Un site internet ecommerce disposnt d'un module 
            de paiement stripe. 
            Langage utilisé PHP5 framework Symfony 5 
            </span>
            <div className=" flex-row mt5 mb5 ">
       <span className='tag sz1 clr5 fw600'>  AngularJS </span>
       <span className='tag sz1 clr5 fw600'>  MongoDb </span>
       <span className='tag sz1 clr5 fw600'>  ExpressJs</span>
       <span className='tag sz1 clr5 fw600'>  Css</span>
       <span className='tag sz1 clr5 fw600'>  Html5 </span>
       
       </div>
       <hr className="mt5"></hr>

           </div>

           <div className="profileProjects flex-col mt10">
            <span className="clr3 sz2 fw600">
            Création site web pour une asbl
            </span>
            <span className="sz2 mt5">
            Un site internet ecommerce disposnt d'un module 
            de paiement stripe. 
            Langage utilisé PHP5 framework Symfony 5 
            </span>
            <div className=" flex-row mt5 mb5">
       <span className='tag sz1 clr5 fw600'>  AngularJS </span>
       <span className='tag sz1 clr5 fw600'>  MongoDb </span>
       <span className='tag sz1 clr5 fw600'>  ExpressJs</span>
       <span className='tag sz1 clr5 fw600'>  Css</span>
       <span className='tag sz1 clr5 fw600'>  Html5 </span>
       
       </div>
       <hr className="mt5"></hr>

           </div>

           

           <div className="profileProjects flex-col mt10">
            <span className="clr3 sz2 fw600">
            Création site web pour une asbl
            </span>
            <span className="sz2 mt5">
            Un site internet ecommerce disposnt d'un module 
            de paiement stripe. 
            Langage utilisé PHP5 framework Symfony 5 
            </span>
            <div className=" flex-row mt5 mb5">
       <span className='tag sz1 clr5 fw600'>  AngularJS </span>
       <span className='tag sz1 clr5 fw600'>  MongoDb </span>
       <span className='tag sz1 clr5 fw600'>  ExpressJs</span>
       
       </div>
       

           </div>

           <div className="jcc flex-row clr3 sz2 fw600 cp"> Voir plus... </div>
    
           </div>
           <div className="mt20 container flex-col ml20">
           <span className="fw600 sz2"><FontAwesomeIcon icon={faGraduationCap}/> Formation</span>
           <span>Ingénieur Informatique</span>
           </div>
         </div>
          {/*   Right Content */ }   
         <div className="flex-col ut2 ml20">
           <div className="container  mt20 mr10 ">
             <span className="flex-row jcc clr3 fw600">Statiqtiques</span>
             <div className="flex-row">
               <span className="ut6   fw600"> Membre depuis:</span>
               <span className="ut3  ">01/01/2022</span>
               
             </div>
             <div className="flex-row">
             <span className="ut6   fw600"> Projets réalisés</span>
               <span className="ut3  ">2</span>
               
             </div>
             <div className="flex-row">
             <span className="ut6   fw600"> Dernière connexion</span>
               <span className="ut3  ">02/02/2022</span>
               
             </div>
           </div>
         </div>



             </div>
     

      </div></>
  )
}
