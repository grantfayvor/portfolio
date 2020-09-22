import React from "react";

export default () => (
  <div className="Contentbody" style={{ minHeight: "100vh" }}>
    <section>
      <main>
        <div className="section-body">
          <div className="col-xl-12">
            <h1>School Manager Portal</h1>
            <h6><b>Multi-tenant School Management Portal</b></h6>
            <p>
              This is an application that was built with <a href="/p/dynamo">Dynamo</a>. It is a management portal for tertiary institutions and was built to be a Multi-tenant SaaS platform.
              This makes setting up of schools as easy creating the clients for the schools and issuing their client IDs.</p>
            <p>
              I led the team driving the deployment of various schools built using the Dynamo framework. Listed below are some of the schools running on Dynamo:
              <ul>
                <li><a href="http://application.futo.edu.ng/">Federal University of Technology, Owerri</a></li>
                <li><a href="https://portal.espoly.edu.ng/">Enugu State Polytechnic, Iwollo</a></li>
                <li><a href="https://portal.akwaibomstatecoe.com/">College of Education, Akwa Ibom</a></li>
                <li><a href="http://degreeportal.fceehaamufu.com/">Federal College of Education, Eha Amufu</a></li>
              </ul>
            </p>
            <p>Check out the docs <a href="https://dynamodocs.vercel.app/docs/getting-started/background">here</a>.</p>
            <h3>What did I do, you ask?</h3>
            <p>
              I primarily with React and the Dynamo framework during this period and was heavily involved in various sections of the product including the back-end and the front-end.
              I led the team for 2 years and;
              <ul>
                <li>drove development of various features based on client (school) requests,</li>
                <li>led deployments and integrations,</li>
                <li>pushed proper adoptions for version controls,</li>
                <li>wrote documentations to ease onboarding processes,</li>
                <li>fixed bugs, and</li>
                <li>guided various members of the team.</li>
              </ul>
            </p>
          </div>
        </div>
        <aside className="nav__aside">
          <span>SCHOOL MANAGER PORTAL</span>
          <div className="vertical__nav__indicator"></div>
        </aside>
      </main>
      <div className="nav__horizontal">
        <div className="horizontal__nav__indicator"></div>
      </div>
    </section>
  </div>
);