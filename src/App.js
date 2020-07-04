import React from "react";
import "./Styles/main.css";
import Nav from "./Components/Nav";
import { Landing } from "./Sections/Landing";
import About from "./Sections/About";

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <About />
    </div>
  );
}

export default App;
