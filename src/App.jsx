import './App.css';
import React from 'react';

//import Navbar 
import Navbar from './components/Navbar';

//import Hero
import Hero from './components/Hero';

//import Skills
 import Skills from './components/Skills';

//import SkillCard
import SkillCard from './components/SkillCard';

//import work Experiance 
import WorkExperience from './components/WorkExperience';

//import ContactMe
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';


//try json file importing 
//import Records from './records.json';

 


const App = () =>  {
  return (
    <div className="App">
      <Navbar/>
      {/* Navbar ..... just check working or not  */}

      <div className="container">
        
        <Hero/>
        <Skills/>
        <SkillCard />
        <WorkExperience/>
        <ContactMe />    

      </div>

      <Footer/>
    </div>
  );
}

export default App;
