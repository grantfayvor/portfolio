import React from "react";

export default () => (
  <div className="Contentbody" style={{ minHeight: "100vh" }}>
    <section>
      <main>
        <div className="section-body">
          <div className="col-xl-12">
            <h1>Cryosleep</h1>
            <h6><b>Bitcoin Transactions Management System</b></h6>
            <p>
              Have you ever wanted an easy way to manage you Bitcoin address and make deposits, send coins to addresses and convert your cryptocurrency into hard currency?
              Cryosleep was created to do just that. It was built with a PHP backend and AngularJS on the front-end.
              I worked with PHP, JavaScript, HTML, CSS and a MySQL database to build the application.
            </p>
            <p>Check out the application @ <a href="https://cryosleep.herokuapp.com/">https://cryosleep.herokuapp.com</a>.</p>
          </div>
        </div>
        <aside className="nav__aside">
          <span>CRYOSLEEP</span>
          <div className="vertical__nav__indicator"></div>
        </aside>
      </main>
      <div className="nav__horizontal">
        <div className="horizontal__nav__indicator"></div>
      </div>
    </section>
  </div>
);