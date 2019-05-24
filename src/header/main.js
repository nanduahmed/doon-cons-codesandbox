import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./header";
import Projects from "../body/Projects";
import Services from "../body/Services";
import Rates from "../body/Rates";
import About from "../body/About";
// import Schedule from './Schedule'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Header} />
      <Route path="/projects" component={Projects} />
      <Route path="/services" component={Services} />
      <Route path="/rates" component={Rates} />
      <Route path="/about" component={About} />
      {/* <Route path="/schedule" component={Schedule} /> */}
    </Switch>
  </main>
);

export default Main;
