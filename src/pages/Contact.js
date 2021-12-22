import './Contact.css'
import githubicon from '../images/github.png';
import linkedinicon from '../images/linkedin.png';
import mailicon from '../images/mail.png';
import cvicon from '../images/cv.png';

function Contact(props) {
  return (
    <div id='contact' className='contact-wrapper'>
      <div className='contact'>

        <h1>Get in touch</h1>
        <p>I'm open to internship opportunities right now!</p>
        <p>
          Please find my resume and contact details below.
        </p>
        <p>
          If you want to collaborate on
          a project or simply want to chat, feel free to reach out to me as well!
        </p>

        <div className='contact-buttons'>
          <a href="https://github.com">
              <img src={cvicon} alt='github' className='contact-icon' />
          </a>
          <a href="https://github.com">
            <img src={githubicon} alt='github' className='contact-icon' />
          </a>
          <a href="https://github.com">
            <img src={mailicon} alt='github' className='contact-icon' />
          </a>
          <a href="https://github.com">
            <img src={linkedinicon} alt='github' className='contact-icon' />
          </a>
        </div>

      </div>
    </div>
  )
}

export default Contact;