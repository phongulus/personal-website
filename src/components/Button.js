import './Button.css'
import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import githubicon from '../images/github.png'
import resumeicon from '../images/resume.png';
import resume from '../resume.pdf';

function Button(props) {
  return (
    <a href={props.link} className='button' target="_blank" rel="noopener noreferrer">
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
    <a href={props.link} className='button' target="_blank" rel="noopener noreferrer">
      <div className="button-content">
        <img src={githubicon} alt={"GitHub"} className="github-button-icon" />
        <div className='button-desc'>
          <p>View on GitHub</p>
        </div>  
      </div>
    </a>
  )
}

function ResumeButton(props) {
  return (
    <a href={resume} className='resume-button-wrapper' target="_blank" rel="noopener noreferrer">
      <div className="button-content">
        <img src={resumeicon} alt="Resume" className="resume-icon" />
        <div className='button-desc'>
          <p>View my Resume</p>
        </div>  
      </div>
    </a>
  )
}

export default Button;
export {Button, GitHubButton, Icon, ResumeButton};