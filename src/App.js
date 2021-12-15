import './App.css';
import Experience from './Experience';
import NavBar from './components/NavBar';
import Projects from './Projects';
import Contact from './Contact';
import Home from './Home';
import About from './About';

function App() {
  return (
    <div className="App">

      <NavBar />

      <Home />

      <About />

      <Experience />

      <Projects />

      <Contact />
      
      <p></p>
      <div>
        Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </div>
      <p></p>

    </div>
  );
}

export default App;
