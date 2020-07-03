import React from "react";
import "./Styles/main.css";
import Nav from "./Components/Nav";
import { Landing } from "./Sections/Landing";

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <section className="test" id="about"></section>
    </div>
  );
}

export default App;
