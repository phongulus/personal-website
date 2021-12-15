import './ProjectCard.css';
import Slide from 'react-reveal/Slide';

function ProjectCard(props) {
  return (
    <Slide bottom>
      <div className='project-card'>
          
        <img src={props.image} alt={props.img_desc} className='project-card-pic' />

        <div className='project-desc-title'>
          <h2>{props.title}</h2>
          <h4>{props.date}</h4>
        </div>

        <p>{props.desc}</p>

      </div>
    </Slide>
  );
}

export default ProjectCard;