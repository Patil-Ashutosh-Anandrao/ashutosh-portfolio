import React, { useState } from 'react';

//import css file 
import '../css/navbar.css';
import MobileNav from './MobileNav';

const Navbar = () => {

  const [openMenu, setOpenMenu]=useState(false); //  use usetate for mobile view ...

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };


  return (
    <>
     <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>


    <div>
      <nav className="nav-wrapper">
        <div className="nav-content">
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

          <button className="menu-btn" onClick={toggleMenu}>
            <span className={"material-symbols-outlined"}
                  style={{fontSize:"1.8 rem"}}
            >
            
              {openMenu ? "close" : "menu"}

            </span>
          </button>


        </div>
      </nav>
    </div>
    </>
  )
}

export default Navbar
