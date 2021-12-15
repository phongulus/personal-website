// import React from 'react'
import './ExperienceCard.css';
import Slide from 'react-reveal/Slide';

function ExperienceCard(props) {
  return (
    <Slide left>
      <div className='experience-card'>
          
        <img src={props.image} alt={props.img_desc} className='experience-pic' />

        <div className='experience-desc'>

          <h2 className='experience-desc-title'>{props.title}</h2>
          <h4>{props.date}</h4>
          
          <p>{props.desc}</p>

        </div>
      </div>
    </Slide>
  );
}

export default ExperienceCard;