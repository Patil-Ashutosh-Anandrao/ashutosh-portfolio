import React from 'react';

//import css file 
import '../css/MobileNav.css';

const MobileNav = ({isOpen, toggleMenu }) => {
  return (
    <>
        <div
            className={`mobile-menu ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
        >

            <div className="mobile-menu-container">
            <h3 className="My-Portfolio">My-Portfolio</h3>

            <ul>
                <li>
                    <a className="menu-item">About</a>
                </li>
                
                <li>
                    <a className="menu-item">Education</a>
                </li>
                
                <li>
                    <a className="menu-item">Project</a>
                </li>
                
                <li>
                    <a className="menu-item">Experience</a>
                </li>
                
                <li>
                    <a className="menu-item">Skills</a>
                </li>
                
                <li>
                    <a className="menu-item">Contact Me</a>
                </li>

                <button className="resume-btn" onClick={()=>{}}>
                    My Resume
                </button>



            </ul>

            </div>
        
        </div>
    </>
  )
}

export default MobileNav
