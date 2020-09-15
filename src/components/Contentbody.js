import React from 'react';
import '../App.css';
import '../content.css';
import "aos/dist/aos.css";
// AOS.init({ disable: () => (window.innerWidth < 800) });


function Contentbody() {
  return (
    <div className="Contentbody ">
      <section>
        <main className="about-section">
          <div className="section-body" data-aos="slide-down" data-aos-duration="1500" data-aos-delay="50">
            <div className="col-xl-12">
              <h1 id="About"><b>Harrison Favour</b></h1>
              <h6><b> I am a Back-End Developer.</b></h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Egestas cras lectus magna sodales aenean condimentum auctor aliquet.
                In eros sed malesuada sit.
                Orci, potenti adipiscing pharetra, ut nunc amet eget.
                Imperdiet vel nisl nisl elit morbi tincidunt turpis convallis elementum.
                Odio tristique orci proin tempor sit convallis in lorem semper.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Egestas cras lectus magna sodales aenean condimentum auctor aliquet.
                In eros sed malesuada sit. Orci, potenti adipiscing pharetra, ut nunc amet eget.
                Imperdiet vel nisl nisl elit morbi tincidunt turpis convallis elementum.
                Odio tristique orci proin tempor sit convallis in lorem semper.
              </p>
              <div className="letstalk2">
                <a class="btn btn-outline-danger" href="mailto:harrisonfavour@gmail.com" role="button">Let's Talk</a>
              </div>
            </div>
          </div>
          <aside
            data-aos="slide-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            data-aos-delay="50"
            className="nav__aside"

            id="slide-one"
          >
            <span>ABOUT</span>
            <div className="vertical__nav__indicator"></div>
          </aside>
        </main>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-delay="50"
          data-aos-anchor="#slide-one"

          className="nav__horizontal"
        >
          <div className="horizontal__nav__indicator"></div>
        </div>

      </section>

      <section className="row-section">
        <main className="main-row-section tech-skills-section">
          <div className="section-body" data-aos="slide-up" data-aos-duration="1500" data-aos-delay="50">
            <div className="col-xl-12 y">
              <h1 id="TechnicalSkills"><b>Technical Skills</b></h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
                voluptatum error cumque id, eos adipisci modi voluptate libero quasi
                repellat animi corporis non voluptates vero nam. Ex sint omnis nam. Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Maiores voluptatum
                error cumque id, eos adipisci modi voluptate libero quasi repellat animi
                corporis non voluptates vero nam. Ex sint omnis nam.
              </p>
              <div className="row">
                <div className="card bg-light mb-3" style={{ maxWidth: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title"><b>Javascript</b></h5>
                    <p className="card-text">
                      Expert in writing backend JavaScript using the
                      Node.js runtime environment.
                    </p>
                  </div>
                </div>
                <div className="card bg-light mb-3" style={{ maxWidth: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title"><b>Java</b></h5>
                    <p className="card-text">
                      Expert in writing backend JavaScript using the
                      Node.js runtime environment.
                    </p>
                  </div>
                </div>
                <div className="card bg-light mb-3" style={{ maxWidth: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title"><b>Go Lang</b></h5>
                    <p className="card-text">
                      Expert in writing backend JavaScript using the
                      Node.js runtime environment.
                    </p>
                  </div>
                </div>
                <div className="card bg-light mb-3" style={{ maxWidth: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title"><b>Node.js</b></h5>
                    <p className="card-text">
                      Expert in writing backend JavaScript using the
                      Node.js runtime environment.
                    </p>
                  </div>
                </div>
                <div className="card bg-light mb-3" style={{ maxWidth: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title"><b>React</b></h5>
                    <p className="card-text">
                      Expert in writing backend JavaScript using the
                      Node.js runtime environment.
                    </p>
                  </div>
                </div>
                <div className="card bg-light mb-3" style={{ maxWidth: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title"><b>DevOps</b></h5>
                    <p className="card-text">
                      Expert in writing backend JavaScript using the
                      Node.js runtime environment.
                    </p>
                  </div>
                </div>
                <div className="card bg-light mb-3" style={{ maxWidth: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title"><b>Technical Writing</b></h5>
                    <p className="card-text">
                      Expert in writing backend JavaScript using the
                      Node.js runtime environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <aside
            data-aos="slide-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            data-aos-delay="50"
            className="nav__aside"

            id="slide-two"
          >
            <span>SKILLS</span>
            <div className="vertical__nav__indicator"></div>
          </aside>
        </main>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-delay="50"
          data-aos-anchor="#slide-two"

          className="nav__horizontal"
        >
          <div className="horizontal__nav__indicator"></div>
        </div>
      </section>

      <section className="row-section">
        <main className="main-row-section portfolio-section">
          <div className="section-body" data-aos="slide-up" data-aos-duration="1500" data-aos-delay="50">
            <div className="col-xl-12 p">
              <h1 id="Portfolio"><b>Portfolio</b></h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
                voluptatum error cumque id, eos adipisci modi voluptate libero quasi
                repellat animi corporis non voluptates vero nam. Ex sint omnis nam. Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Maiores voluptatum
                error cumque id, eos adipisci modi voluptate libero quasi repellat animi
                corporis non voluptates vero nam. Ex sint omnis nam.
              </p>


              <div className="row">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">Dynamo</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </p>
                    <a href="https://www.medium.com" className="card-link">
                      Check it out
                    </a>
                  </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">Dynamo</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </p>
                    <a href="https://www.medium.com" className="card-link">
                      Check it out
                    </a>
                  </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">Dynamo</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </p>
                    <a href="https://www.medium.com" className="card-link">
                      Check it out
                    </a>
                  </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">Dynamo</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </p>
                    <a href="https://www.medium.com" className="card-link">
                      Check it out
                    </a>
                  </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">Dynamo</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </p>
                    <a href="https://www.medium.com" className="card-link">
                      Check it out
                    </a>
                  </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">Dynamo</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </p>
                    <a href="https://www.medium.com" className="card-link">
                      Check it out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <aside
            data-aos="slide-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            data-aos-delay="50"
            className="nav__aside"

            id="slide-three"
          >
            <span>PORTFOLIO</span>
            <div className="vertical__nav__indicator"></div>
          </aside>
        </main>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos-delay="50"
          data-aos-anchor="#slide-three"

          className="nav__horizontal"
        >
          <div className="horizontal__nav__indicator"></div>
        </div>
      </section>

      <section style={{ marginTop: "40px" }}>
        <div className="edittext4">
          <h6>The End</h6>
        </div>
      </section>
    </div>
  );
}

export default Contentbody
