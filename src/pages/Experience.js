// import React from "react";
import './Experience.css';
import {GitHubButton, Icon} from '../components/Button';
import ExperienceCard from '../components/ExperienceCard';
import highschoolpic from '../images/2018-09-lfay-hanoi-vietnam-474x246.jpg';
import pythonicon from '../images/python.png';
import matplotlib from '../images/matplotlib.png';
import rpi from '../images/raspberry-pi.png';
import mysql from '../images/mysql.png';
import cpp from '../images/c.png';
import cgal from '../images/cgal.png';

function Experience(props) {
  return (
    <div id='experience' className='experience-wrapper'>
      <div className='experience'>

        <h1>My journey</h1>

        <ExperienceCard
          title='Lycée Français Alexandre Yersin'
          date='2016 - 2020'
          image={highschoolpic}
          img_desc="high school"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum."
        />

        <ExperienceCard
          title='Yale-NUS College'
          date='2020 - present'
          image={highschoolpic}
          img_desc="high school"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum."
        />

        <ExperienceCard
          title='go-cart.io - Student Researcher'
          date='December 2020 - present'
          image={highschoolpic}
          img_desc="high school"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum."
          buttons={
            <div className='experience-card-buttons'>
              <Icon icon={cpp} alt="C++" />
              <Icon icon={cgal} alt="CGAL" />
            </div>
          }
        />

        <ExperienceCard
          title='Olsen Lab - Student Researcher'
          date='May 2021 - present'
          image={highschoolpic}
          img_desc="high school"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum."
          buttons={
            <div className='experience-card-buttons'>
              <Icon icon={pythonicon} alt="Python" />
              <Icon icon={matplotlib} alt="Matplotlib" />
              <Icon icon={mysql} alt="MySQL" />
              <Icon icon={rpi} alt="Raspberry Pi" />
              <GitHubButton link="https://github.com" />
            </div>
          }
        />

      </div>
    </div>
  )
}

export default Experience;