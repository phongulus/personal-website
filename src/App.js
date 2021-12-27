import './App.css';
import Experience from './pages/Experience';
import NavBar from './components/NavBar';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">

      <NavBar />

      <Home />

      <About />

      <Experience />

      <Projects />

      <Contact />
      
      
      <div className='attribution'>
        <p>
        Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik" className='attribution-link'>Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" className='attribution-link'>www.flaticon.com</a> / 
        Photo by <a href="https://unsplash.com/@nathananderson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" className='attribution-link'>Nathan Anderson</a> on <a href="https://unsplash.com/s/photos/night-sky?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" className='attribution-link'>Unsplash</a>
        </p>
      </div>
    </div>
  );
}

export default App;
