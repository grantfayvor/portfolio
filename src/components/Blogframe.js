import React from 'react';
import { Link } from 'react-router-dom';
import '../blog.css';
import Blog from './Blog';
import { VscGithubAlt } from 'react-icons/vsc';
import '../content.css';
import "aos/dist/aos.css";
import BlogNavbar from './BlogNavbar';
// AOS.init({ disable: () => (window.innerWidth < 800) });



   function Blogframe() {
    return (
      <div id="blogpage">
        <div className="col-xl-12">
          <div className="BlogPage">
            <div className="row">
              {/*1st column*/}
              <div className="col-xl-2 no-mobile-padding">
                <h5 className="main-header"><b><Link to="">Harrison Favour</Link></b></h5>
              <BlogNavbar></BlogNavbar>
              </div>
              {/*1st column ends*/}
              {/*2nd column*/}

              <div className="col-xl-9 ml-0 mr-0 pl-0 pr-0">

                <div className="letstalk col-xl-9 ml-0 mr-0 pl-0 pr-0">
                  <a className="btn btn-outline-danger" href="mailto:harrisonfavour@gmail.com" role="button">Let's Talk</a>
                </div>
                <Blog></Blog>
              </div>
              {/*2nd column ends*/}
              {/* 3rd column */}
              <div className="col-xl-1 fixed-bottom-mobile">
                <div className="App_right_sidebar">
                  <a href="https://github.com"><VscGithubAlt className="github"></VscGithubAlt></a>
                  <a href="https://twitter.com"><i className="fab fa-twitter fa-lg"></i></a>
                  <a href="https://www.linkedin.com/feed/"><i className="fab fa-linkedin-in fa-lg"></i></a>
                  <a href="mailto:harrisonfavour@gmail.com"><i className="fa fa-envelope fa-lg"></i></a>
                </div>
              </div>
              {/*3rd column ends*/}
            </div>
          </div>
        </div>
      </div>

    );
  }


export default Blogframe
