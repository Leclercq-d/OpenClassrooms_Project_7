import ThumbEl from './Thumb.jsx';
import '../styles/Gallery.scss';


function Gallery(){
  let Logements = require('../data/logements.json')
 return(
  <div className='gallery'>
    {Logements.map((loge,index)=>(
      <ThumbEl id={loge.id}title={loge.title} cover={loge.cover} key={index}/>
    ))
    }
  </div>
)}

export default Gallery