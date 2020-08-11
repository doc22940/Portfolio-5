import React from "react";
import "./Styles/main.css";
import Nav from "./Components/Nav";
import { Landing } from "./Sections/Landing";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";
import Blog from "./Sections/Blog";
import Contact from "./Sections/Contact";
import Footer from "./Components/Footer";

// Page imports
import ProjectList from "./Pages/ProjectList";
import BlogList from "./Pages/BlogList";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/projects" component={ProjectList} />
          <Route path="/blogs" component={BlogList} />
        </Switch>
      </div>
    </Router>
  );
}

const HomePage = () => {
  return (
    <React.Fragment>
      <Nav />
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default App;
