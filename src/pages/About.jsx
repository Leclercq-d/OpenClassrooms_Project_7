import '../styles/About.scss'
import AboutBanner from '../components/AboutBanner'
import Accordion from '../components/Accordion.jsx'
let AboutData = require('../data/aboutData.json')

function About(){
  console.log(AboutData)
  return(
    <div className='aboutStyle'> 
     <div className='bannerStyle'>
      <AboutBanner/>
     </div>
     <div className='aboutAccordion'>
      {AboutData.map((item, index)=>(
        <Accordion   title={item.title} content={item.content} key={index}/>
      ))}
     </div>
   </div>
  )
}

export default About