import React from 'react';
import { Route, Switch } from "react-router-dom"
import  Home from "./components/Home"
import Blog from "./components/Blog"

function App() {
  return (
    <main>
           
    <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/blog" component={Blog} />
        <Route component={Error} />
    </Switch>
</main>
  );
}

export default App;
