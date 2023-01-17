import React, { useState } from 'react';
import chevronLeft from '../assets/chevronLeft.svg'
import chevronRight from '../assets/chevronRight.svg'
import '../styles/Tag.scss'
import '../styles/Carousel.scss'

function Carousel(){
  let newUrlId = new URL (window.location).searchParams.get('id');
  const Logements = require('../data/logements.json');
  const logement = Logements.find(x=>x.id===newUrlId);
  const arrayImg = logement.pictures;
  const [current, setCurrent]=useState(0);
  const length = arrayImg.length;
  const prevSlide = () => {
    setCurrent(current === 0 ? length -1 : current-1);
  }
  const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current+1);
  }
  const goToSlide=(index)=>{setCurrent(index)}
  return(
    <div className='slider'>  
        <img className='carous PrevBtn' src={chevronLeft} onClick={prevSlide} alt=''/>
        <img  className='carous NextBtn' src={chevronRight} onClick={nextSlide} alt=''/>
        {arrayImg.map((img, index)=>(
          <div key={index} className={index === current ? 'img active' : 'img'}> 
            {index === current && (<img className='carousImg' src={img} alt={logement.title}/>)}    
        </div>            
        ))}
        <div className='bullets'>
            {arrayImg.map((bullet, index)=>(
              // <p key={index} className='bulletPoint' onClick={()=>goToSlide(index)}>•</p> 
            <p key={index} className="imgCounter">{current+1  + '/' + arrayImg.length}</p>

            ))}
          </div> 
    </div>

 
)}
export default Carousel