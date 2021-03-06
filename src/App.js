import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  About,
  Contact,
  Projects,
  Navbar,
  ProjectsGrid,
  ScrollToTop,
} from "./components";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
            <ProjectsGrid />
            <Contact />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route>
            <Projects />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
{
  /*  <Hero />
        <About />
        <Projects />
        <Contact /> */
}
