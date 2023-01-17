import '../styles/Footer.scss';
import FooterLogo from '../assets/FooterLogo.svg';

function Footer(){
  return(
  <div className='footerStyle'>
    <img className='footerLogoStyle' src={FooterLogo} alt='Logo Kasa blanc'/>
    <p>©2020 Kasa. All Rights Reserved</p>
  </div>
)}

export default Footer