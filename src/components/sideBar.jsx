
import DevMobile from '@mui/icons-material/DeveloperMode';
import WebIcon from '@mui/icons-material/Web';
import MultiMedia  from '@mui/icons-material/Brush';
import PaidIcon from '@mui/icons-material/Paid';
import Burautique from '@mui/icons-material/KeyboardHide';
import Stats from '@mui/icons-material/QueryStats';
import Analyse from '@mui/icons-material/BarChart';
import Translate from '@mui/icons-material/Translate';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
export default function sideBar() {
  return <div className="sideBar">
      <div className="sidebarWrapper">
          <div className="sidebarTitle">
              Catégories
              </div>
              <ul className="sidebarList">
                  <li className="sidebarListItem">
                    <WebIcon className="sidebarListIcon"/>
                      <span className="sidebarListItemtext">
                          Développement Web
                      </span>
                  </li>
                  <li className="sidebarListItem">
                    <DevMobile className="sidebarListIcon"/>
                      <span className="sidebarListItemtext">
                          Développement Mobile
                      </span>
                  </li>
                  <li className="sidebarListItem">
                    <MultiMedia className="sidebarListIcon"/>
                      <span className="sidebarListItemtext">
                          
                          Multimdéia
                      </span>
                  </li>
                  <li className="sidebarListItem">
                    <PaidIcon className="sidebarListIcon"/>
                      <span className="sidebarListItemtext">
                      Digital Marketting  
                      </span>
                  </li>
                  <li className="sidebarListItem">
                    <Burautique className="sidebarListIcon"/>
                      <span className="sidebarListItemtext">
                          Burautique
                      </span>
                  </li>
                  <li className="sidebarListItem">
                    <Stats className="sidebarListIcon"/>
                      <span className="sidebarListItemtext">
                          SPSS et Statiqtiques
                      </span>
                  </li>
                  <li className="sidebarListItem">
                    <Analyse className="sidebarListIcon"/>
                      <span className="sidebarListItemtext">
                          Analyse des données
                      </span>
                  </li>
                  <li className="sidebarListItem">
                    <Translate className="sidebarListIcon"/>
                      <span className="sidebarListItemtext">
                          Traduction
                      </span>
                  </li>
                  
              </ul>
              <button className="sidebarButton">Afficher plus</button>
              <hr className="sidebarHr" />
              <div className="social">
                 <div className="socialTitle"> Suivez nous</div>
                 <div className="socialItem">
                 <FacebookIcon className="socialIcon" fontSize="large" color="primary"/>
                 <span className="socialText">1300 abonnés</span>
                 </div>
                 <div className="socialItem">
                 <InstagramIcon  className="socialIcon" fontSize="large" color="action"/>
                 <span className="socialText">1300 abonnés</span>
                 </div>

              </div>
          
      </div>
  
  
  
  
  </div>;
}
