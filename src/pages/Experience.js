// import React from "react";
import './Experience.css';
import {Icon} from '../components/Button';
import ExperienceCard from '../components/ExperienceCard';
import highschoolpic from '../images/2018-09-lfay-hanoi-vietnam-474x246.jpg';
import collegepic from '../images/yale-nus.jpg';
import cartogram from '../images/worldcartogram.png';
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

        <h1 className='experience-title'>My journey</h1>

        <ExperienceCard
          title='Lycée Français Alexandre Yersin'
          date='2016 - 2020'
          image={highschoolpic}
          img_desc="high school"
          desc='I spent my formative high school years here, where the language of
          instruction is French.
          I sat the French Baccalaureate and received a 20 out of 20 overall score, graduating
          with highest honours. I was also selected as a recipient of the AEFE Excellence-Major
          scholarship that covers tuition fees and living expenses for five years of higher
          studies in France, an honour that I ultimately turned down for Yale-NUS College in Singapore.'
        />

        <ExperienceCard
          title='Yale-NUS College'
          date='2020 - present'
          image={collegepic}
          img_desc="high school"
          desc="The next stop on my journey is Yale-NUS College, where I am working towards a Bachelor
          of Science. I am able to afford my studies here thanks to the Yale-NUS Donor Study Award.
          The liberal arts curriculum allowed me to explore a variety of topics such as literature and
          social studies. I am also currently the Editor-in-Chief of the Yale-NUS Undergraduate Journal,
          a publication dedicated to making research accessible for undergraduates."
        />

        <ExperienceCard
          title='go-cart.io - Student Researcher'
          date='December 2020 - present'
          image={cartogram}
          img_desc="high school"
          desc="Professor Michael Gastner at Yale-NUS College developed a method based on fluid motion
          to generate cartograms, which are maps where areas are proportional to some statistical data
          (e.g. population). I worked on and implemented an algorithm in C++ for projecting these cartograms,
          which involves densifying the map (adding more points) and subdividing it into triangles that
          can then be used to translate map coordinates via affine transformations. This allows for
          intersection-free cartograms!"
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
          desc="Due to the sensitive nature of Professor Ben Olsen's experiments, monitoring lab conditions is a must.
          I have set up a system for monitoring temperatures and humidities around the lab using Raspberry
          Pi's that send their data to the MySQL server hosted in the lab. I have also written an
          app with a Graphical User Interface that allows for visualizing this data in the form
          of graphs. I am currently working on another app to monitor and update the Pi's
          remotely, as well as a Telegram Bot to warn researchers about abnormal conditions in the lab."
          buttons={
            <div className='experience-card-buttons'>
              <Icon icon={pythonicon} alt="Python" />
              <Icon icon={matplotlib} alt="Matplotlib" />
              <Icon icon={mysql} alt="MySQL" />
              <Icon icon={rpi} alt="Raspberry Pi" />
              {/* <GitHubButton link="https://github.com" /> */}
            </div>
          }
        />

      </div>
    </div>
  )
}

export default Experience;