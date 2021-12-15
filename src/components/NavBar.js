import './NavBar.css';
import logo from '../images/logo.svg';

function NavBar(props) {
  return (
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
  );
}

export default NavBar;