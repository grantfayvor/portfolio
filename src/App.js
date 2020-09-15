import React from 'react';
import { Route, Switch } from "react-router-dom"
import {Fragment } from 'react';
import  Home from "./components/Home"
import Blogframe from "./components/Blogframe"
import ScrollToTop from './components/scrolltoTop'


function App() {
  return (
    <main>
     <Fragment>
    <ScrollToTop />
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/#About" component={Home}/>
        <Route path="/blog" component={Blogframe} />
        <Route component={Error} />
    </Switch>
    </Fragment>
</main>
  );
}

export default App;
