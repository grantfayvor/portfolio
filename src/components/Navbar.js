import React from 'react';
import { Link } from 'react-router-dom';
import Scrollspy from 'react-scrollspy'

function Navbar() {

        return (
            <div className="col-xl-2">
                <nav class="navbar navbar-expand-xl navbar-light bg-light">

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul>
                            <div className="navMarker">
                                <Scrollspy className="scrollspy" items={['About', 'TechnicalSkills', 'Portfolio']}
                                    currentClassName="isCurrent">
                                    <li><a href="#About"><b>About</b></a></li>
                                    <li><a href="#TechnicalSkills"><b>Skills</b> </a></li>
                                    <li><a href="#Portfolio"><b>Portfolio</b></a></li>
                                </Scrollspy>
                            </div>
                            <div className="bloglink1">
                                <li className="nav-link"><Link to="/blog"><b>Blog</b></Link></li>

                            </div>
                        </ul>

                    </div>
                </nav>

            </div>
        )
    
}


export default Navbar