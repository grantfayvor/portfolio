import React from 'react';
import Navbar from './Navbar'
import Contentbody from './Contentbody'
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="col">
    <div className="Home">
        <div className="row">
            {/* 1st column */}
        <div className="col">
        <h5><Link to="/">Harrison Favour</Link></h5>
        <Navbar></Navbar>
        </div>
        {/* 1st column ends */}
        {/* 2nd column */}
        <div className="col">
          <div className="letstalk">
          <a class="btn btn-outline-danger" href="mailto:harrisonfavour@gmail.com" role="button">Let's Talk</a>
          </div>
         <Contentbody></Contentbody>



        </div>
        {/* 2nd column ends*/}
        {/* 3rd column */}
        <div className="col">
            <div className="App_right_sidebar">
            
            <a href="https://github.com"><i class="fa fa-github"></i></a>
            <a href="https://twitter.com"><i class="fa fa-twitter"></i></a>
            <a href="https://www.linkedin.com/feed/"><i class="fa fa-linkedin"></i></a>
            <a href="mailto:eduzorkosi@gmail.com"><i class="fa fa-envelope"></i></a>
        
            </div>
        </div>
        {/*3rd column ends*/}
        </div>
        </div>
    </div>
  );
}

export default Home
