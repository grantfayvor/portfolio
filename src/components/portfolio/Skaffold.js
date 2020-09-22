import React from "react";

export default () => (
  <div className="Contentbody" style={{ minHeight: "100vh" }}>
    <section>
      <main>
        <div className="section-body">
          <div className="col-xl-12">
            <h1>Skaffold</h1>
            <h6><b>JavaScript Framework</b></h6>
            <p>
              Skaffold is a JavaScript framework for quickly scaffolding e-commerce applications. It basically helps you avoid the stress of boilerplate code and gives you the ability to customize as you want.
              It was built with NodeJS.
            </p>
            <p>Check out the framework on npm @ <a href="https://www.npmjs.com/package/skaffold"><code>skaffold</code></a>.</p>
          </div>
        </div>
        <aside className="nav__aside">
          <span>DYNAMO</span>
          <div className="vertical__nav__indicator"></div>
        </aside>
      </main>
      <div className="nav__horizontal">
        <div className="horizontal__nav__indicator"></div>
      </div>
    </section>
  </div>
);