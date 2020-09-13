import React from 'react';
import { Link } from 'react-router-dom';
import Scrollspy from 'react-scrollspy'

function Navbar() {

    return (
        <div className="col-xl-2 pr-0 breadcrumb-container">
            <nav class="navbar navbar-expand-xl navbar-light bg-light">

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    {/* <ul className="progress"> */}
                    <div class="navbarline">
                        <div class="w3-third tablink"></div>
                    </div>
                    <Scrollspy className="sidebar-status scrollspy" items={['About', 'TechnicalSkills', 'Portfolio']}
                        currentClassName="isCurrent">
                        <li><a href="#About">About</a></li>
                        <li><a href="#TechnicalSkills">Skills </a></li>
                        <li><a href="#Portfolio">Portfolio</a></li>
                        <li><Link to="/blog">Blog</Link></li>
                    </Scrollspy>
                </div>
            </nav>

        </div>
    )

}


export default Navbar