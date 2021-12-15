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
      
      <p></p>
      <div>
        Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </div>
      <p></p>

    </div>
  );
}

export default App;
