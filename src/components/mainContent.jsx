import React from 'react';
import WebIcon from '@mui/icons-material/Web';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import HomeProject from './homeProject';
import PostModal from './postModal/postModal';
export default function mainContent({postuler,setPostuler}) {

  console.log("ps",postuler)
  return <div className='main'> 
  
  <div className="mainWrapper">
  {postuler && <PostModal setPostuler={setPostuler}/>}
     <div className="mainTitle">
       Les projets 
     </div>
     
     <HomeProject setPostuler={setPostuler}/>
     <HomeProject setPostuler={setPostuler}/>
     <HomeProject setPostuler={setPostuler}/>
     <HomeProject setPostuler={setPostuler}/>
  </div>
  
  </div>;
}
