import React from 'react';
import Navbar from './Navbar'
import Contentbody from './Contentbody'
import { Link } from 'react-router-dom'
import { VscGithubAlt} from 'react-icons/vsc';



function Home() {
  return (
    <div id="home">
      <div className="col-xl-12">
        <div className="Home">
          <div className="row">
            {/* 1st column */}
            <div className="col-xl-2">
              <h5><b><Link to="">Harrison Favour</Link></b></h5>
              <Navbar></Navbar>
            </div>
            {/* 1st column ends */}
            {/* 2nd column */}
            <div className="col-xl-9 mr-0 pr-0">
              <div className="letstalk">
                <a class="btn btn-outline-danger" href="mailto:harrisonfavour@gmail.com" role="button">Let's Talk</a>
              </div>
              <Contentbody></Contentbody>

            </div>
            {/* 2nd column ends*/}
            {/* 3rd column */}
            <div className="col-xl-1">
              <div className="App_right_sidebar">
              <a href="https://github.com"><VscGithubAlt class="github"></VscGithubAlt></a>
                <a href="https://twitter.com"><i class="fab fa-twitter fa-lg"></i></a>
                <a href="https://www.linkedin.com/feed/"><i class="fab fa-linkedin-in fa-lg"></i></a>
                <a href="mailto:harrisonfavour@gmail.com"><i class="fa fa-envelope fa-lg"></i></a>

              </div>
            </div>
            {/*3rd column ends*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
