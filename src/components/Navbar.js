import React from 'react';
import { Link } from 'react-router-dom';
import Scrollspy from 'react-scrollspy'


function Navbar() {
  return (
    <div className="col-lg-3">
        
         <nav>
            <ul className="sidebar">
            <Scrollspy items={ ['About', 'TechnicalSkills', 'Portfolio'] } currentClassName="is-current">
            <div className="navMarker">
            <li className="nav__item"><a href="#About" className="nav__link">About</a></li>
            <li className="nav__item"><a href="#TechnicalSkills" className="nav__link">Skills</a></li>
            <li className="nav__item"><a href="#Portfolio" className="nav__link">Portfolio</a></li>
            </div>
            </Scrollspy>
            <div className="bloglink">
            <li><Link to="/blog">Blog </Link></li>
            </div>
            </ul>
         </nav>
      
    </div>
  );
}

export default Navbar