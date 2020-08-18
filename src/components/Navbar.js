import React from 'react';
import { Link } from 'react-router-dom';
import Scrollspy from 'react-scrollspy'


function Navbar() {
  return (
    <div className="col">
        
         <nav>
            <ul className="sidebar">
            <Scrollspy items={ ['About', 'TechnicalSkills', 'Portfolio'] } currentClassName="is-current">
            <div className="navMarker">
            <li activeClassName="navlink--active" className="navlink"><a href="#About">About</a></li>
            <li activeClassName="navlink--active" className="navlink"><a href="#TechnicalSkills">Skills</a></li>
            <li activeClassName="navlink--active" className="navlink"><a href="#Portfolio" >Portfolio</a></li>
            </div>
            </Scrollspy>
            
            <div className="bloglink">
            <li activeClassName="navlink--active" className="navlink"><Link to="/blog">Blog </Link></li>
      
            </div>
            </ul>
         </nav>
       

      
    </div>
  );
}

export default Navbar