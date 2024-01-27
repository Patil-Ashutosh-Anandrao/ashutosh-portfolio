import React, { useRef } from 'react';
import '../css/Education.css';
import { EDUCATION } from '../utils/data';
import EducationCard from './EducationCard';


import Slider from 'react-slick';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';



const Education = () => {

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
    <section className="education-container">
        <h5>Education</h5>

        <div className="education-content">

          <div className="arrow-right" onClick={slideRight}>
            {/* <span class="material-symbols-outlined">chevron_right</span> */}
            <ChevronRightIcon className="material-symbols-outlined" />
          </div>

          <div className="arrow-left" onClick={slideLeft}>
            {/* <span class="material-symbols-outlined">chevron_left</span> */}
            <ChevronLeftIcon className="material-symbols-outlined" />
          </div>

          <Slider ref={sliderRef}{...settings}>
            {EDUCATION.map((item)=>{
                return(
                <EducationCard key={item.title} details={item}/>
                );
            })}
          </Slider>
          
        </div>

    </section>
  
  );
  

}

export default Education
