import './Home.css';
import Zoom from 'react-reveal/Zoom';
import scroll from './images/scroll.png';

function Home(props) {
  return (
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
  );
}

export default Home;