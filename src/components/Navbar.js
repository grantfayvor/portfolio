// import React from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <div className="Navbar">
        
//          <nav>
//             <ul className="side bar">
            
//             <div id="list-example" className="list-group-sidebar">
//           <a className="list-group-item list-group-item-action" href="#About">
//             About
//           </a>
//           <a className="list-group-item list-group-item-action" href="#TechnicalSkills">
//             Technical Skills
//           </a>
//           <a className="list-group-item list-group-item-action" href="#Portfolio">
//             Portfolio
//           </a>
        
//         </div>
        
//             <li><Link to="/blog">Blog </Link></li>
        
//             </ul>
//         </nav>
      
//     </div>
//   );
// }

// export default Navbar
import React from 'react';
import { Link } from 'react-router-dom';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import About from "./About";
  


function Navbar() {
  return (
    <div className="col-lg-3">
        
         <nav>
            <ul className="sidebar">
            <HashRouter>
            <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink to="/TechnicalSkills">TechnicalSkills</NavLink></li>
            <li><NavLink to="/Portfolio">Portfolio</NavLink></li>

            <div className="content">
            <Route path="/About" component={About}/>
        
          </div>
            </HashRouter>
            <li><Link to="/blog">Blog </Link></li>
        
            </ul>
        </nav>
      
    </div>
  );
}

export default Navbar