import React from 'react';
import '../navbar.css';
import { Link } from 'react-router-dom';
import Scrollspy from 'react-scrollspy';
import { VscMenu } from 'react-icons/vsc';

function Navbar() {

    return (
        <>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <VscMenu style={{ color: "#BF0D60", width:"2em", height: "2em", marginLeft: "35px"}}/>
            </button>
            <div className="col-xl-2 pr-0 breadcrumb-container">
                <nav className="navbar navbar-expand-xl navbar-light bg-light">
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <button className="navbar-toggler" style={{ float: "right", color: "#FFFFFF" }} type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa fa-times fa-lg"></i>
                        </button>
                        <div className="navbarline">
                            <div className="w3-third tablink"></div>
                        </div>
                        <Scrollspy className="sidebar-status scrollspy" items={['About', 'TechnicalSkills', 'Portfolio']}
                            currentClassName="isCurrent">
                            <li data-toggle="collapse" data-target=".navbar-collapse.show"><a href="/#About">About</a></li>
                            <li data-toggle="collapse" data-target=".navbar-collapse.show"><a href="/#TechnicalSkills">Skills </a></li>
                            <li data-toggle="collapse" data-target=".navbar-collapse.show"><a href="/#Portfolio">Portfolio</a></li>
                            <li data-toggle="collapse" data-target=".navbar-collapse.show"><Link to="/blog">Blog</Link></li>
                        </Scrollspy>
                    </div>
                </nav>
            </div>
        </>
    )

}


export default Navbar

