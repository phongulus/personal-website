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
