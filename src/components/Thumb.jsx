import '../styles/Thumb.scss'
import {Link} from 'react-router-dom';

function ThumbEl(loge){
  return(
    <Link  className='thumbStyle' to={`/logement?id=${loge.id}`}>
      <img className='thumbImg'src={loge.cover} alt={'image de' + loge.title}/> 
      <p className='thumbTitle'>{loge.title}</p>
    </Link>
  )}

export default ThumbEl