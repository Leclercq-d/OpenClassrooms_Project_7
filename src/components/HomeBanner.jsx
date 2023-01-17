// import BannerImg from '../assets/home_banner.jpg'
import homeImBanner from '../assets/homeBanner.png'
import '../styles/Banner.scss'

function HomeBanner(){
  return(
   <div className='Banner'>
     <img  className='BannerI'  src={homeImBanner} alt='Home banner'/>
     <p className='BannerTxt'>Chez vous, partout et ailleurs</p>
   </div>
  )
}

export default HomeBanner