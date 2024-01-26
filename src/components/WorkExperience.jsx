import React, { useRef } from 'react';
import '../css/WorkExperience.css';
import { WORK_EXPERIENCE } from '../utils/data';
import ExperienceCard from './ExperienceCard';

import Slider from 'react-slick';

// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';


const WorkExperience = () => {

  const sliderRef=useRef();

  const settings={
    dots:false,
    infinite: true,
    speed:500,
    slidesToShow:2,
    slidesToScroll:1,
    arrows:false,
    responsive:[
      {
        breakpoint:769,
        settings:{
          slidesToShow:1,
          slidesToScroll:1,
        },
      },
    ],
  };

  const slideRight=()=>{
    sliderRef.current.slickNext();
  };

  const slideLeft=()=>{
    sliderRef.current.slickPrev();
  }


  return (
    <section className="experience-container">
        <h5>Work Experience</h5>

        <div className="experience-content">

          <div className="arrow-right" onClick={slideRight}>
            <span class="material-symbols-outlined">Move-Right</span>
          </div>

          <div className="arrow-left" onClick={slideLeft}>
            <span class="material-symbols-outlined">Move-Left</span>
          </div>

          <Slider ref={sliderRef}{...settings}>
            {WORK_EXPERIENCE.map((item)=>{
                return(
                <ExperienceCard key={item.title} details={item}/>
                );
            })}
          </Slider>
          
        </div>

    </section>
  )
}

export default WorkExperience;
