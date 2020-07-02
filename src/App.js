import React from "react";
import "./Styles/main.css";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="landing-page" id="intro">
        <h1 className="name">Ric</h1>
        <svg
          className="h-letter"
          width="460"
          height="555"
          viewBox="0 0 460 555"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M335.15 0.599976H459.95V555H335.15V319.8H125.55V555H0.75V0.599976H125.55V212.6H335.15V0.599976Z"
            fill="#7A9E7E"
          />
        </svg>

        <h1 className="name">ard</h1>
      </div>
      <section className="test" id="about"></section>
    </div>
  );
}

export default App;
