import React from "react";

export default () => (
  <div className="Contentbody" style={{ minHeight: "100vh" }}>
    <section>
      <main>
        <div className="section-body">
          <div className="col-xl-12">
            <h1>Hexcord</h1>
            <h6><b>Video Content Creation Tool</b></h6>
            <p>
              Have you ever wanted to quickly create video content without going through the hassle of installing one software after the other and learning how to use those specific softwares?
              Hexcord is being built as a simple to use tool for creating presentations and tutorial videos and basically just recording anythingg that is on your computer screen including your face if you want that.
              It is presented as a simple to install browser extension with very minimal configurations.
            </p>
            <p>
              Hexcord is being built with Golang for the backend with Rabbit MQ for messaging and Firebase to push notifications.
              The front-end is built with React while the chrome extension is a combination of regular HTML, JavaScript, CSS.
            </p>
            <h3>What did I do you ask?</h3>
            <p>
              I worked with Golang for the backend with a MongoDB database and React for the front-end. The chrome extension was built with vanilla JavaScript.
              Here are a list of things that I did:
              <ul>
                <li>architected the product from start to finish,</li>
                <li>worked on features for the product,</li>
                <li>worked on deployments and integrations,</li>
                <li>proper use of version controls, and</li>
                <li>fixing bugs as they arise.</li>
              </ul>
            </p>
          </div>
        </div>
        <aside className="nav__aside">
          <span>HEXCORD</span>
          <div className="vertical__nav__indicator"></div>
        </aside>
      </main>
      <div className="nav__horizontal">
        <div className="horizontal__nav__indicator"></div>
      </div>
    </section>
  </div>
);