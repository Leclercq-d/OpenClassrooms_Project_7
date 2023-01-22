import '../styles/E404.scss'
import E404Img from '../assets/E404.svg'
import {Link} from 'react-router-dom'

function E404(){
  return(
    <div className='errorStyle'>
      <p className='E404'>404</p>
      <p className='desc'> Oups, la page que vous demandez n'existe pas</p>
      <Link className='link' to='/'>Retourner à la page d'Accueil</Link>
      <br/>
    </div>
  )
}

export default E404