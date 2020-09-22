import React from "react";

export default () => (
  <>
    <section>
      <main className="about-section">
        <div className="section-body">
          <div className="col-xl-12">
            <h1 id="About"><b>Harrison Favour</b></h1>
            <h6><b>Software Engineer</b></h6>
            <p>
              Hello ______________,
            </p>
            <p>
              I am a Software Engineer with expertise in building secure and scalable enterprise systems. With over 5 years of experience as a developer, I have worked with various languages during this period including; PHP, Java, C# and in recent times specializing on JavaScript and Golang.
              I've worked in very diverse teams of different sizes during this rollercoaster 5 year ride.
            </p>
            <p>
              I enjoy building products that people love and derive a lot of fun working on open source tools.
              You might consider me a Full-Stack Engineer and in truth I am able to work on the frontend (I can't design though), or backend, or on some random utility library, even Desktop applications (if they still make those).
                I've very recently been doing DevOps "things" and I find that quite enjoyable. You'd find me writing on <a href="https://medium.com/@hyper_debugger">Medium</a> sometimes and here's a <a href="https://medium.com/@hyper_debugger">link</a> if you are interested.
            </p>
            <p>
              I absolutely love playing FIFA, you can reach out to setup a match!
            </p>
            <div className="letstalk2">
              <a className="btn btn-outline-danger" href="mailto:fayvorharrison101@gmail.com" role="button">Let's Talk</a>
            </div>
          </div>
        </div>
        <aside className="nav__aside">
          <span>ABOUT</span>
          <div className="vertical__nav__indicator"></div>
        </aside>
      </main>
      <div className="nav__horizontal">
        <div className="horizontal__nav__indicator"></div>
      </div>
    </section>

    <section className="row-section">
      <main className="main-row-section tech-skills-section">
        <div className="section-body">
          <div className="col-xl-12 y">
            <h1 id="TechnicalSkills"><b>Technical Skills</b></h1>
            <p>
              This is actually only a list of tools I can remember working with at the moment.
            </p>
            <div className="row">
              <div className="card bg-light mb-3 col-xl-5 pl-0 pr-0">
                <div className="card-body">
                  <h5 className="card-title"><b>Javascript</b></h5>
                  <p className="card-text">
                    NodeJS | React | Vanilla
                    </p>
                </div>
              </div>
              <div className="card bg-light mb-3 col-xl-5 pl-0 pr-0">
                <div className="card-body">
                  <h5 className="card-title"><b>Golang</b></h5>
                </div>
              </div>
              <div className="card bg-light mb-3 col-xl-5 pl-0 pr-0">
                <div className="card-body">
                  <h5 className="card-title"><b>MongoDB</b></h5>
                </div>
              </div>
              <div className="card bg-light mb-3 col-xl-5 pl-0 pr-0">
                <div className="card-body">
                  <h5 className="card-title"><b>Java</b></h5>
                  <p className="card-text">
                    Spring Framework
                    </p>
                </div>
              </div>
              <div className="card bg-light mb-3 col-xl-5 pl-0 pr-0">
                <div className="card-body">
                  <h5 className="card-title"><b>SQL</b></h5>
                </div>
              </div>
              <div className="card bg-light mb-3 col-xl-5 pl-0 pr-0">
                <div className="card-body">
                  <h5 className="card-title"><b>Rabbit MQ</b></h5>
                </div>
              </div>
              <div className="card bg-light mb-3 col-xl-5 pl-0 pr-0">
                <div className="card-body">
                  <h5 className="card-title"><b>ElasticSearch</b></h5>
                </div>
              </div>
              <div className="card bg-light mb-3 col-xl-5 pl-0 pr-0">
                <div className="card-body">
                  <h5 className="card-title"><b>Web Servers</b></h5>
                  <p className="card-text">
                    Apache | Nginx
                  </p>
                </div>
              </div>
              <div className="card bg-light mb-3 col-xl-5 pl-0 pr-0">
                <div className="card-body">
                  <h5 className="card-title"><b>Docker</b></h5>
                </div>
              </div>
              <div className="card bg-light mb-3 col-xl-5 pl-0 pr-0">
                <div className="card-body">
                  <h5 className="card-title"><b>Kubernetes</b></h5>
                </div>
              </div>
              <div className="card bg-light mb-3 col-xl-5 pl-0 pr-0">
                <div className="card-body">
                  <h5 className="card-title"><b>Google Cloud Platform (GCP)</b></h5>
                  <p className="card-text">
                    Compute Engine | Cloud Datastore / Firestore | Firebase | Pub / Sub | Cloud Functions (Serverless) | App Engine | Cloud Storage | BigQuery | Stack Driver
                  </p>
                </div>
              </div>
              <div className="card bg-light mb-3 col-xl-5 pl-0 pr-0">
                <div className="card-body">
                  <h5 className="card-title"><b>Technical Writing</b></h5>
                  <p className="card-text">
                    Documentation | Articles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <aside className="nav__aside">
          <span>SKILLS</span>
          <div className="vertical__nav__indicator"></div>
        </aside>
      </main>
      <div className="nav__horizontal">
        <div className="horizontal__nav__indicator"></div>
      </div>
    </section>

    <section className="row-section">
      <main className="main-row-section portfolio-section">
        <div className="section-body" >
          <div className="col-xl-12 p">
            <h1 id="Portfolio"><b>Portfolio</b></h1>
            <p>
              Hey, what have I done during my time as a Software Developer? Well here you find out.
            </p>
            <div className="row">
              <div className="card col-xl-5 pl-0 pr-0">
                <div className="card-body">
                  <h5 className="card-title dark-green-text">Dynamo</h5>
                  <p className="card-text">
                    A framework for building diverse Management Information Systems. It was built with primarily with JavaScript.
                    </p>
                  <a href="/p/dynamo" className="card-link">
                    Check it out
                    </a>
                </div>
              </div>
              <div className="card col-xl-5 pl-0 pr-0">
                <div className="card-body">
                  <h5 className="card-title dark-green-text">Multi-tenant School Management Portal</h5>
                  <p className="card-text">
                    This was built using the Dynamo framework and currently has about 5 schools using the system currently.
                    </p>
                  <a href="/p/school-manager" className="card-link">
                    Check it out
                    </a>
                </div>
              </div>
              <div className="card col-xl-5 pl-0 pr-0">
                <div className="card-body">
                  <h5 className="card-title dark-green-text">Hexcord</h5>
                  <p className="card-text">
                    Have you ever wanted to quickly create video content without going through the hassle of installing one software after the other and learning how to use those specific softwares?
                    Hexcord is being built as a simple to use tool for creating presentations and tutorial videos and basically just recording anythingg that is on your computer screen including your face if you want that.
                    </p>
                  <a href="/p/hexcord" className="card-link">
                    Check it out
                    </a>
                </div>
              </div>
              <div className="card col-xl-5 pl-0 pr-0">
                <div className="card-body">
                  <h5 className="card-title dark-green-text">React Native Kin SDK</h5>
                  <p className="card-text">
                    Hey, I'm open source! This is a library for interacting with the Kinecosystem using React Native. It was built with Java.
                    </p>
                  <a href="/p/rnkinsdk" className="card-link">
                    Check it out
                    </a>
                </div>
              </div>
              <div className="card col-xl-5 pl-0 pr-0">
                <div className="card-body">
                  <h5 className="card-title dark-green-text">Voucher Processing System</h5>
                  <p className="card-text">
                    Mostly an internal tool for organizations to create vouchers and scale up the approval chain for the voucher to be processed.
                    </p>
                  <a href="/p/voucher-processor" className="card-link">
                    Check it out
                    </a>
                </div>
              </div>
              <div className="card col-xl-5 pl-0 pr-0">
                <div className="card-body">
                  <h5 className="card-title dark-green-text">Cryosleep</h5>
                  <p className="card-text">
                    This is used by people seeking an easy way to manage their Bitcoin addresses and make transactions directly from within the application.
                  </p>
                  <a href="/p/cryosleep" className="card-link">
                    Check it out
                  </a>
                </div>
              </div>
              <div className="card col-xl-5 pl-0 pr-0">
                <div className="card-body">
                  <h5 className="card-title dark-green-text">Document Management System</h5>
                  <p className="card-text">
                    It helps you manage your uploaded documents and tries to accurately classify the documents using the K Nearest Neighbour machine learning algorithm
                    </p>
                  <a href="/p/document-manager" className="card-link">
                    Check it out
                    </a>
                </div>
              </div>
              <div className="card col-xl-5 pl-0 pr-0">
                <div className="card-body">
                  <h5 className="card-title dark-green-text">Skaffold</h5>
                  <p className="card-text">
                    This is an open source library for scaffolding e-commerce applications.
                    </p>
                  <a href="/p/skaffold" className="card-link">
                    Check it out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <aside className="nav__aside">
          <span>PORTFOLIO</span>
          <div className="vertical__nav__indicator"></div>
        </aside>
      </main>
      <div className="nav__horizontal">
        <div className="horizontal__nav__indicator"></div>
      </div>
    </section>

    <section style={{ marginTop: "40px" }}>
      <div className="edittext4" style={{ width: "90%", margin: "auto" }}>
        <h6>The End</h6>
      </div>
    </section>
  </>
)