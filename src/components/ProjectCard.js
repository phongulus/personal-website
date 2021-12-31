import './ProjectCard.css';
import Slide from 'react-reveal/Slide';

function ProjectCard(props) {
  return (
    <Slide left>
      <div className='project-card'>
          
        <img src={props.image} alt={props.img_desc} className='project-card-pic' />

        <div>
          <h2 className='project-card-title'>{props.title}</h2>
          <h4>{props.date}</h4>
        </div>

        <p>{props.desc}</p>

        {props.buttons}

      </div>
    </Slide>
  );
}

export default ProjectCard;