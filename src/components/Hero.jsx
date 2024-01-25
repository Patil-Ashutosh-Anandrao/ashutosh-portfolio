import React from 'react';
import '../css/Hero.css';


const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        
        <h2>Hello, I am Ashu Patil  | Frontend Developer </h2>
        <p>
        Hello! My name is Ashutosh, and I’m a pursuing B.Tech in Computer Science Sanjay Ghodawat University, Kolhapur.
        I have score Distinction through out my course. Apart from this I have completed courses and attended webinars, workshops. This helps me to clear all the basics and I am really willing to learn more about Technology.
        During my diploma and degree period I have completed some projects and certification courses. Currently I am working on my 2 projects first one is building E-Commerce Website and another one is related to hardware that is radar detection.
        </p>

      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="./assets/images/react-icon.png" alt="" />
          </div>

          <img src="./assets/images/Ashu_pic.jpeg" alt="" />

        </div>

        <div>
          <div className="tech-icon">
              <img src="./assets/images/html-icon.png" alt="" />
          </div>

          <div className="tech-icon">
              <img src="./assets/images/css-icon.png" alt="" />
          </div>

          <div className="tech-icon">
              <img src="./assets/images/js-icon.png" alt="" />
          </div>
        </div>
      </div>


    </section>
  );
 };

export default Hero;
