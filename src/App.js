import logo from './logo.svg';
import scroll from './scroll.png';
import profilepic from './profile_pic.png';
import highschoolpic from './2018-09-lfay-hanoi-vietnam-474x246.jpg';
import arduinopic from './Arduino_Uno_-_R3.jpg'
import fbicon from './facebook.png';
import githubicon from './github.png';
import './App.css';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <div className='navbar-wrapper'>
        <div className='navbar'>
          <img src={logo} className="navbar-logo" alt="logo"/>
          <div className='navbuttons'>
            <a href='#home' className='nav-button'>Home</a>
            <a href='#about' className='nav-button'>About</a>
            <a href='#experience' className='nav-button'>Experience</a>
            <a href='#projects' className='nav-button'>Projects</a>
            <a href='#contact' className='nav-button'>Contact</a>
          </div>
        </div>
      </div>
      

      <div id='home' className='home'>
        <Zoom>
          <h1 className='hello'>Hello.</h1>
        </Zoom>
        <Zoom delay='1000'>
          <h2 className='name'>I'm Phong, an aspiring software engineer.</h2>
        </Zoom>
        <Zoom delay='1500'>
          <h5>(scroll down to find out more!)</h5>
        </Zoom>
        <Zoom delay='1500'>
          <img src={scroll} className='scroll-icon' alt='scroll'/>
        </Zoom>
      </div>

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

      <div id='experience' className='experience-wrapper'>
        <div className='experience'>
          <h1>My journey</h1>
          {/* <p>Click on each card to find out more!</p> */}
          {/* <p></p> */}

          <div className='experience-card'>
            <img src={highschoolpic} alt="high school" className='experience-pic' />
            <div className='experience-desc'>
              <h2>Lycée Français Alexandre Yersin</h2>
              <h4>2016-2020</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>

          <div className='experience-card'>
            <img src={highschoolpic} alt="high school" className='experience-pic' />
            <div className='experience-desc'>
              <h2>Lycée Français Alexandre Yersin</h2>
              <h4>2016-2020</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>

        </div>
      </div>

      <div id='projects' className='projects-wrapper'>
        <div className='projects'>
          <h1>My personal projects</h1>
          <p></p>
          <div className='project-cards'>
            
            <div className='project-card'>
              <img src={arduinopic} alt="arduino" className='project-card-pic' />
              <div className='project-card-desc'>
                <h2>Arduino project</h2>
                <h4>2019</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>

            <div className='project-card'>
              <img src={arduinopic} alt="arduino" className='project-card-pic' />
              <div className='project-card-desc'>
                <h2>Arduino project</h2>
                <h4>2019</h4>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div id='contact' className='contact-wrapper'>
        <div className='contact'>

          <h1>Get in touch</h1>
          <p>I'm open to internship opportunities right now!</p>
          <p>
            Please find my resume
            and contact details below. If you want to collaborate on
            a project or simply want to chat, feel free to reach out to me as well!
          </p>

          <div className='contact-buttons'>
            <a href="https://facebook.com/">
              <img src={fbicon} alt='fb' className='contact-icon'/>
            </a>
            <a href="https://github.com">
              <img src={githubicon} alt='github' className='contact-icon' />
            </a>
          </div>

        </div>
      </div>
      
      

      <p></p>
      <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      <p></p>

    </div>
  );
}

export default App;
