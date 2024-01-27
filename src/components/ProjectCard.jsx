import React from 'react';
import '../css/ProjectCard.css';

const ProjectCard = ({ details }) => {
  return (
    <div className="projectcard-card">
        <h6>
            {details.title}
        </h6>


        <ul>
            {details.info.map((item) => {
                return <li key={item}>{item}</li>;
            })}
        </ul>
      
    </div>

  )
}

export default ProjectCard;
