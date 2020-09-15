import React from 'react';
import '../blog.css';
import image from "../img/img1.png";
import image2 from "../img/img2.png";
import '../content.css';
import "aos/dist/aos.css";
// AOS.init({ disable: () => (window.innerWidth < 800) });


function Blog() {
  return (

    <div className="BlogContent">
      <section>
        <main className="about-section">
          <div className="section-body" data-aos="slide-down" data-aos-easing="linear" data-aos-duration="1500" data-aos-delay="50"
          >
            <div className="col-xl-12">

              <h1><b>Blog</b></h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas cras lectus magna sodales aenean
                condimentum auctor aliquet.In eros sed malesuada sit. Orci, potenti adipiscing pharetra, ut nunc amet
                eget.
                Imperdiet vel nisl nisl elit morbi tincidunt turpis convallis elementum.
              </p>

              <div className="cardBody">
                <div className="card" style={{ width: "270px" }}>
                  <img className="card-img-top" src={image} alt="" />
                  <div className="card-body">
                    <h5 className="card-title"><b>Dynamo</b></h5>
                    <p className="card-text">
                      Expert in writing backend JavaScript using the Node.js runtime environment.
                    </p>
                    <a href="https://www.medium.com" className="Read">
                      <b>Read</b>
                    </a>
                  </div>
                </div>
                <div className="card" style={{ width: "270px" }}>
                  <img className="card-img-top" src={image2} alt="" />
                  <div className="card-body">
                    <h5 className="card-title"><b>Dynamo</b></h5>
                    <p className="card-text">
                      Expert in writing backend JavaScript using the Node.js runtime environment.
                    </p>
                    <div className="readtext">
                      <a href="https://www.medium.com" className="Read">
                        <b>Read</b>
                      </a>
                    </div>

                  </div>
                </div>
              </div>
              <div className="more">
                <a href="https://www.medium.com" className="MoreArticles">
                  More Articles</a>

              </div>
            </div>
          </div>

          <aside
            data-aos="slide-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
            data-aos-delay="50"
            className="nav__aside"

            id="slide-four"
          >
            <span>BLOG</span>
            <div className="vertical__nav__indicator"></div>
          </aside>
        </main>
      

      </section>

    </div >
  );
}

export default Blog
