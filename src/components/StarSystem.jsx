import '../styles/StarSystem.scss'
import zero from '../assets/0.svg'
import hundred from '../assets/100.svg'


function getStar(value){
  switch(value){
    case 0: return zero;
    case 100: return hundred;
    default : return null;
  }
}

function getStars(value){
  switch(value){
    case 0: return [0,0,0,0,0];
    case 1: return [100,0,0,0,0];
    case 2: return [100,100,0,0,0];
    case 3: return [100,100,100,0,0];
    case 4: return [100,100,100,100,0];
    case 5: return [100,100,100,100,100];
    default : return null;
  }
}

export default function Rating({value}, index){
  return( 
    <div key={index} className='stars'>
      {getStars(value).map((value, starIndex)=>(<img key={starIndex} className='star' src={getStar(value)} alt=''/>))}
    </div>
  )
}
