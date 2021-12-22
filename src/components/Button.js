import './Button.css'
import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import githubicon from '../images/github.png'
import cvicon from '../images/cv.png';

function Button(props) {
  return (
    <a href={props.link} className='button'>
      <div className="button-content">
        <img src={props.icon} alt={props.icon_desc} className="button-icon" />
        <div className='button-desc'>
          <p>{props.desc}</p>
        </div>  
      </div>
    </a>
  )
}

function Icon(props) {
  return (
    <Tooltip title={props.alt}>
      <div className='icon'>
        <img src={props.icon} alt={props.alt} className='icon-pic' />
      </div>
    </Tooltip>
  )
}

function GitHubButton(props) {
  return (
    <Button
      link={props.link}
      icon={githubicon}
      alt="GitHub"
      desc="View on GitHub"
    />
  )
}

function CvButton(props) {
  return (
    // <Button
    //   link="https://google.com"
    //   icon={cvicon}
    //   alt="CV"
    //   desc="View my Resume"
    // />
    <a href="https://google.com" className='cv-button-wrapper'>
      <div className="button-content">
        <img src={cvicon} alt="CV" className="button-icon" />
        <div className='button-desc'>
          <p>View my Resume</p>
        </div>  
      </div>
    </a>
  )
}

export default Button;
export {Button, GitHubButton, Icon, CvButton};