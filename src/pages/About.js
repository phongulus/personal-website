import './About.css';
import profilepic from '../images/profile_pic_2.jpg';
import Fade from 'react-reveal/Fade';
import { CvButton } from '../components/Button';

function About(props) {
  return (
    <div className='about-wrapper' id='about'>
      <div className='about'>
        <Fade left>
          <div className='about-desc'>

            <h1 className='about-title'>About me</h1>
            
            <div className='profile-pic-wrapper-mobile'>
              <Fade right>
                <img src={profilepic} className='profile-pic' alt="Profile"/>
              </Fade>
            </div>
            
            <p>
              Thanks for dropping by!
            </p>
            <p>
              My full name is Le Nguyen Phong, but I'm just Phong to my friends and family. I enjoy
              tinkering with technology in my free time, be it software or hardware, and perusing
              news on the latest computing products and innovations.
            </p>
            <p>
              Originally from Hanoi, Vietnam, I am now enrolled as an undergraduate at Yale-NUS College
              in Singapore, where I put my mostly self-taught coding skills to use in various
              research projects. I'm currently exploring web development, and I hope to look into
              machine learning in the near future.
            </p>
            <p>
              Keep scrolling to view my milestones and see what I can do, or click below
              for the TL;DR!
            </p>
            <div className='cv-button'><CvButton /></div>
          </div>
        </Fade>

        <div className='profile-pic-wrapper'>
          <Fade right>
            <img src={profilepic} className='profile-pic' alt="Profile"/>
          </Fade>
        </div>
        
      </div>
    </div>
  );
}

export default About;