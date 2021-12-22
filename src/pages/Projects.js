import './Projects.css';
import {GitHubButton, Icon} from '../components/Button';
import ProjectCard from '../components/ProjectCard';
import arduinopic from '../images/Arduino_Uno_-_R3.jpg'
import arduinoicon from '../images/arduino.png';
import jslogo from '../images/javascript.png';
import reactlogo from '../images/react.png';
import htmlicon from '../images/html.png';
import cssicon from '../images/css.png';

function Projects(props) {
  return (
    <div id='projects' className='projects-wrapper'>
      <div className='projects'>
        <h1>My personal projects</h1>
        <p></p>
        <div className='project-cards'>
          
          <ProjectCard
            title="Light Data Transceiver"
            date="2019"
            image={arduinopic}
            img_desc="arduino"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum."
            buttons={
              <div className='project-card-buttons'>
                <Icon icon={arduinoicon} alt="Arduino" />
                <GitHubButton link="https://github.com" />
              </div>
            }
          />

          <ProjectCard
            title="Personal Website"
            date="2021"
            image={arduinopic}
            img_desc="arduino"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum."
            buttons={
              <div className='project-card-buttons'>
                <Icon icon={htmlicon} alt="HTML" />
                <Icon icon={cssicon} alt="CSS" />
                <Icon icon={jslogo} alt="Javascript" />
                <Icon icon={reactlogo} alt="React.js" />
                <GitHubButton link="https://github.com" />
              </div>
            }
          />

        </div>
      </div>
    </div>
  )
}

export default Projects;