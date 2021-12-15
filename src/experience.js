import React from "react";
import ExperienceCard from './components/ExperienceCard';
import highschoolpic from './images/2018-09-lfay-hanoi-vietnam-474x246.jpg';

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

      </div>
    </div>
  )
}

export default Experience;