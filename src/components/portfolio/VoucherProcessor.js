import React from "react";

export default () => (
  <div className="Contentbody" style={{ minHeight: "100vh" }}>
    <section>
      <main>
        <div className="section-body">
          <div className="col-xl-12">
            <h1>Voucher Processor</h1>
            <h6><b>Voucher Processing System</b></h6>
            <p>
              Dynamo is an in-house JavaScript framework built for quickly setting up very diverse Management Information Systems.
              It was built primarily with NodeJS, React and MongoDB.
              Dynamo seeks to break down every user interaction into some combination of Processes, Steps and Processors.</p>
            <p>Processes being the envelop body that can house a collection of Steps.
            The Steps are the action the user is trying to perform whether it is filling a form, viewing some data, interacting with a table, etc.
            Processors are the action runners themselves, they contain actual code to be run. They are useful for fetching data, submitting a form, deleting data, etc.
            </p>
            <p>Check out the docs <a href="https://dynamodocs.vercel.app/docs/getting-started/background">here</a>.</p>
            <h3>What did I do you ask?</h3>
            <p>
              I worked with NodeJS, React and MongoDB during this period and was heavily involved in various sections of the product including the back-end and the front-end.
              I led the team for 2 years and;
              <ul>
                <li>drove development of various features of the framework,</li>
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