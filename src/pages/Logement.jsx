import Carousel from '../components/Carousel';
import Tag from '../components/Tag';
import Accordion from '../components/Accordion';
import '../styles/Logement.scss';
import Rating from '../components/StarSystem';
import E404 from '../pages/Error404';

function Logement(){
  let newUrlId = new URL (window.location).searchParams.get('id');
  const Logements = require('../data/logements.json');
  const logement = Logements.find(x=>x.id===newUrlId);
  if(logement===undefined){
    window.location.replace(E404)
  }

  const logeDesc = logement.description;
  const logeEquip = logement.equipments;
  const logeHost = logement.host;
  const logeRating = logement.rating;

 return(
  <div className='logeStyle'>
    <Carousel/>
   <div className='logeDetails1'>
      <div>
        <h1 >{logement.title}</h1>
        <p>{logement.location}</p>
        <div className='logeTags'>
         <Tag/>
        </div>
      </div>  
      <div className='leftData'>
        <Rating value={JSON.parse(logeRating)} />
        <div className='hostStyle'>
          <p>{logeHost.name}</p>
          <img src={logeHost.picture} alt={logeHost.name}/>
        </div>
      </div>
   </div>
   <div className='logeDetails2'> 
      <Accordion title={<p>Description</p>} content={<p className='logeDesc'>{logeDesc}</p>} />
      <Accordion title={<p>Equipements</p>} content={<ul className='equipList'>{logeEquip.map((equip, index)=>(<li key={index}>{equip}</li>))}</ul>} />
   </div>  
  </div>
 )
}
export default Logement