import React, { useState } from 'react';
import '../styles/Accordion.scss';
import chevronUp from '../assets/chevronUp.svg';
import chevronDown from '../assets/chevronDown.svg';

function Accordion (item, index) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div key={index} className="accordionStyle">
      <div className="accordionT" onClick={() => setIsActive(!isActive)}>
        <section>{item.title}</section>
        <div>{isActive ? <img className='chevron' src={chevronUp} alt=''/> : <img className='chevron' src={chevronDown} alt=''/>}</div>
      </div>
      {isActive && (<div className="accordionC"><section>{item.content}</section></div>)}
    </div>
  );
};

export default Accordion;