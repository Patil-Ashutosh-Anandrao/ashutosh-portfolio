import React from 'react';
import '../css/EducationCard.css';

const EducationCard = ({ details }) => {
  return (
    <div className="education-card">
        <h6>
            {details.title}
        </h6>

        <div className="education-duration">
            {details.date}
        </div>

        <br />

        <p className="education-name">
            {details.School}
        </p>

        <br />
        
        <div className="education-marks">
            {details.Marks}
        </div>
      
    </div>
  
  )
}

export default EducationCard;
