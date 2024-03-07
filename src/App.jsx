import { useState } from "react";

import TopHeader from "./components/TopHeader";

import "./css/Button.css";
import "./css/App.css";

function App() {
  const [activeLink, setActiveLink] = useState("Hero-Section");
  const handleLinkClick = (Link) => {
    setActiveLink(Link);
  };

  return (
    <>
      <div id="Section-Container">
        <section id="Hero-Section" className="Section">
          <TopHeader />
          <div id="Hero-Content-Container">
            <h1>Welcome to My Portfolio!</h1>
            <h2>My name is Ludwig Engelhardt</h2>
            <h2>I am in the process of becoming a full stack developer.</h2>
          </div>
          <div id="Hero-Button-Container">
            <button>Projects</button>
            <button>Contact Me</button>
          </div>
        </section>
        <section id="AboutMe-Section" className="Section">
          <h2>Something about me</h2>
        </section>
        <section id="Skills-Section" className="Section">
          <h2>These are the Programming Skills I possess:</h2>
          <ul>
            <li>HTML5 & CSS3</li>
            <li>JavaScript (ES6)</li>
          </ul>
        </section>
        <section id="Projects-Section" className="Section"></section>
        <section id="Contact-Section" className="Section"></section>
        <section id="Footer-Section" className="Section"></section>
      </div>
    </>
  );
}

export default App;
