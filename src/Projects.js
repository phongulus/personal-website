import './Projects.css';
import ProjectCard from './components/ProjectCard';
import arduinopic from './images/Arduino_Uno_-_R3.jpg'

function Projects(props) {
  return (
    <div id='projects' className='projects-wrapper'>
      <div className='projects'>
        <h1>My personal projects</h1>
        <p></p>
        <div className='project-cards'>
          
          <ProjectCard
            title="Arduino Project"
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
          />

          <ProjectCard
            title="Arduino Project"
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
          />

        </div>
      </div>
    </div>
  )
}

export default Projects;