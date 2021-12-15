import './About.css';
import profilepic from '../images/profile_pic.png';
import Fade from 'react-reveal/Fade';

function About(props) {
  return (
    <div className='about-wrapper' id='about'>
      <div className='about'>
        <Fade left>
          <div className='about-desc'>
            <h1>About me</h1>
            <p>
              Thanks for dropping by!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <p>
              Keep scrolling to view my milestones and see what I can do, or click below
              for the TL;DR!
            </p>
          </div>
        </Fade>
        <Fade right>
          <img src={profilepic} className='profile-pic' alt="Profile"/>
        </Fade>
      </div>
    </div>
  );
}

export default About;