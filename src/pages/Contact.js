import './Contact.css'
import fbicon from '../images/facebook.png';
import githubicon from '../images/github.png';

function Contact(props) {
  return (
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
  )
}

export default Contact;