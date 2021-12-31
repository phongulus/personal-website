import './Projects.css';
import {GitHubButton, Icon} from '../components/Button';
import ProjectCard from '../components/ProjectCard';
import arduinoicon from '../images/arduino.png';
import jslogo from '../images/javascript.png';
import reactlogo from '../images/react.png';
import htmlicon from '../images/html.png';
import cssicon from '../images/css.png';
import website from '../images/website_screenshot.jpg';
import lightproj from '../images/light_project.jpg';
import question from '../images/question-marks.jpg';

function Projects(props) {
  return (
    <div id='projects' className='projects-wrapper'>
      <div className='projects'>
        <h1 className='projects-title'>My personal projects</h1>
        <p></p>
        <div className='project-cards'>
          
          <ProjectCard
            title="Light Data Transceiver"
            date="2019"
            image={lightproj}
            img_desc="project"
            desc="As part of our research project for the French Baccalaureate,
            my groupmate and I crafted a pair of transceivers that can send
            and receive text messages via visible light. I handled the bulk of the
            circuit design and the programming of the microcontrollers."
            buttons={
              <div className='project-card-buttons'>
                <Icon icon={arduinoicon} alt="Arduino" />
                <GitHubButton link="https://github.com/phongulus/light-messenger" />
              </div>
            }
          />

          <ProjectCard
            title="Personal Website"
            date="2021"
            image={website}
            img_desc="website"
            desc="This website is my first foray into web development. I created this website
            using React, all while making sure it displays nicely on both mobile screens
            and large displays. Animations were implemented using React Reveal, Material UI,
            and CSS."
            buttons={
              <div className='project-card-buttons'>
                <Icon icon={htmlicon} alt="HTML" />
                <Icon icon={cssicon} alt="CSS" />
                <Icon icon={jslogo} alt="Javascript" />
                <Icon icon={reactlogo} alt="React.js" />
                <GitHubButton link="https://github.com/phongulus/personal-website" />
              </div>
            }
          />

          <ProjectCard
            title="Mystery Project"
            date="Coming Soon!"
            image={question}
            img_desc="Question Marks"
            desc="Stay tuned for more fun projects that I'll undertake in the future!"
          />

        </div>
      </div>
    </div>
  )
}

export default Projects;