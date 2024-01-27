import React from 'react';
import '../css/SkillCard.css';
import Skills from './Skills';
import { SKILLS } from '../utils/data';

const SkillCard = ({title, iconUrl, isActive, onClick}) => {
  return (
    
        <div className={`skills-card ${isActive ? "active" : " "}`}
            onClick={()=> onClick()}
        >

            <div className="skill-icon">
                <img src={iconUrl} alt={title} />
            </div>

        <span>{title}</span>

        
        </div>
    
  )
}

export default SkillCard;
