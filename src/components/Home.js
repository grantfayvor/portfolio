import React from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from './Navbar'
import Contentbody from './Contentbody'
import { Link } from 'react-router-dom';
import Dynamo from './portfolio/Dynamo';
import Blog from './Blog';
import SchoolManager from './portfolio/SchoolManager';
import DocumentManager from './portfolio/DocumentManager';
import Hexcord from './portfolio/Hexcord';
import RNKinSDK from './portfolio/RNKinSDK';
import Skaffold from './portfolio/Skaffold';
import VoucherProcessor from './portfolio/VoucherProcessor';
import Cryosleep from './portfolio/Cryosleep';



function Home() {
  return (
    <div id="home">
      <div className="col-xl-12">
        <div className="Home">
          <div className="row">
            <div className="col-xl-2 no-mobile-padding fixed-top-mobile">
              <h5 className="main-header"><b><Link to="">Harrison Favour</Link></b></h5>
              <Navbar></Navbar>
            </div>
            <div className="col-xl-9 ml-0 mr-0 pl-0 pr-0">
              <div className="letstalk col-xl-9 ml-0 mr-0 pl-0 pr-0">
                <a className="btn btn-outline-danger" href="mailto:fayvorharrison101@gmail.com" role="button">Let's Talk</a>
              </div>
              <Switch>
                <Route exact path="/" component={Contentbody} />
                <Route path="/blog" component={Blog} />
                <Route path="/p/dynamo" component={Dynamo} />
                <Route path="/p/school-manager" component={SchoolManager} />
                <Route path="/p/document-manager" component={DocumentManager} />
                <Route path="/p/hexcord" component={Hexcord} />
                <Route path="/p/rnkinsdk" component={RNKinSDK} />
                <Route path="/p/skaffold" component={Skaffold} />
                <Route path="/p/cryosleep" component={Cryosleep} />
                <Route path="/p/voucher-processor" component={VoucherProcessor} />
                {/* <Route component={Error} /> */}
              </Switch>

            </div>
            <div className="col-xl-1 fixed-bottom-mobile">
              <div className="App_right_sidebar">
                <a href="https://github.com/grantfayvor"><i className="fab fa-github fa-lg"></i></a>
                <a href="https://twitter.com/hyper_debugger"><i className="fab fa-twitter fa-lg"></i></a>
                <a href="https://www.linkedin.com/in/favour-harrison-5aa312a9/"><i className="fab fa-linkedin-in fa-lg"></i></a>
                <a href="https://medium.com/@hyper_debugger"><i className="fab fa-medium fa-lg"></i></a>
                <a href="mailto:fayvorharrison101@gmail.com"><i className="fa fa-envelope fa-lg"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
