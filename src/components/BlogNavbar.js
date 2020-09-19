import React from 'react';
import { Link } from 'react-router-dom';
import '../blog.css';
import '../content.css';
import Scrollspy from 'react-scrollspy'


function BlogNavbar() {
    return (
        <div className="col-xl-2 pr-0 breadcrumb-container">
            <nav class="navbar navbar-expand-xl navbar-light bg-light">

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <div class="navbarline">
                        <div class="w3-third tablink"></div>
                    </div>
                    <Scrollspy className="sidebar-status scrollspy" items={['About', 'TechnicalSkills', 'Portfolio']}
                        currentClassName="isCurrent">
                        <li><Link to="">About</Link></li>
                        <li><Link to="#TechnicalSkill">Skills</Link></li>
                        <li><Link to="">Portfolio</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                    </Scrollspy>
                </div>
            </nav>

        </div>

    );
}

export default BlogNavbar