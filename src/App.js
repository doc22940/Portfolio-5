import React from "react";
import "./Styles/main.css";
import Nav from "./Components/Nav";
import { Landing } from "./Sections/Landing";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
