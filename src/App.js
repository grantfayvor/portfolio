import React from 'react';
import { Route, Switch } from "react-router-dom"
import {Fragment } from 'react';
import  Home from "./components/Home"
import Blog from "./components/Blog"
import ScrollToTop from './components/scrolltoTop'


function App() {
  return (
    <main>
     <Fragment>
    <ScrollToTop />
    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/#About" component={Home}/>
        <Route path="/blog" component={Blog} />
        <Route component={Error} />
    </Switch>
    </Fragment>
</main>
  );
}

export default App;
