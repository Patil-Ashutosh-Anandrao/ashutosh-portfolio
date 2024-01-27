import './App.css';
import React from 'react';

//import Navbar 
import Navbar from './components/Navbar';

//import Hero
import Hero from './components/Hero';

//import Skills
 import Skills from './components/Skills';

//import SkillCard
//import SkillCard from './components/SkillCard';

//import work Experiance 
import WorkExperience from './components/WorkExperience';

//import ContactMe
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';

// import education
import Education from './components/Education';

//import project
import Project from './components/Project';


//try json file importing 
//import Records from './records.json';

 


const App = () =>  {
  return (
    <div className="App">
      <Navbar/>
      {/* Navbar ..... just check working or not  */}

      <div className="container">
        
        <Hero/>
        <Education />
        <Skills/>
        {/* <SkillCard /> */}
        <Project/>
        <WorkExperience/>
        <ContactMe />    

      </div>

      <Footer/>
    </div>
  );
}

export default App;
