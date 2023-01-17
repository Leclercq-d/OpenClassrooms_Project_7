import '../styles/Header.scss';
import LogoImg from '../assets/logo.svg';
import {NavLink} from 'react-router-dom'

function Header(){

  return (
  <div className ='header' >
    <img className='logo'src={LogoImg} alt='logo de la compagnie Kasa'/>
    <nav className ='hNav'>
      <NavLink className='nav_link' style={({isActive})=>{return isActive ? {textDecoration:'underline'}:{}}} to='/'>Accueil</NavLink>
      <NavLink className='nav_link' style={({isActive})=>{return isActive ? {textDecoration:'underline'}:{}}} to='/about'>A propos</NavLink>
    </nav>
  </div>
)}
export default Header