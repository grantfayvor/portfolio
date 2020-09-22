import React from "react";

export default () => (
  <div className="Contentbody" style={{ minHeight: "100vh" }}>
    <section>
      <main>
        <div className="section-body">
          <div className="col-xl-12">
            <h1>Bikelane</h1>
            <h6><b>Ride Hailing Service</b></h6>
            <p>
              Bikelane is a ride-hailing service built with a NodeJS backend, React-native for the mobile application and a MongoDB database.
              I worked with a team from architecting stage down to the finish.
            </p>
          </div>
        </div>
        <aside className="nav__aside">
          <span>BIKELANE</span>
          <div className="vertical__nav__indicator"></div>
        </aside>
      </main>
      <div className="nav__horizontal">
        <div className="horizontal__nav__indicator"></div>
      </div>
    </section>
  </div>
);