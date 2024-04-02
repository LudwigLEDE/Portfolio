import { useState } from "react";

import TopHeader from "./components/TopHeader";
import HeroSection from "./components/HeroSection";
import TerminalContact from "./components/TerminalContact";
import { Hero } from "./components/Hero";

import "./css/Button.css";
import "./css/App.css";

function App() {
  const [activeLink, setActiveLink] = useState("Hero-Section");
  const handleLinkClick = (Link) => {
    setActiveLink(Link);
  };

  return (
    <>
      <TopHeader />
      <div id="Section-Container">
        <section id="Hero-Section" className="Section">
          <div id="Hero-Content-Grid">
            <div id="Hero-Content-Container" className="Hero-Grid-Item">
              <HeroSection />
            </div>
            <div id="Hero-Button-Container" className="Hero-Grid-Item">
              <button>Projects</button>
              <button>Contact Me</button>
            </div>
          </div>
        </section>
        <section id="AboutMe-Section" className="Section">
          <div id="AboutMe-Content-Grid">
            <div className="AboutMe-Grid-Item">
              <h2>Something about me</h2>
            </div>
          </div>
        </section>
        <section id="Skills-Section" className="Section">
          <h2>These are the Programming Skills I possess:</h2>
          <ul>
            <li>HTML5 & CSS3</li>
            <li>JavaScript (ES6)</li>
          </ul>
        </section>
        <section id="Projects-Section" className="Section">
          <div id="Project-Card-Container-Grid">
            <div className="Project-Card">
              <h3>SwiftShare</h3>
              <h5 className="Project-ProgrammingLanguage-Display" id="Java">
                Java
              </h5>
            </div>
            <div className="Project-Card">
              <h3>Chatify</h3>
              <div className="Project-Card-TechStack">
                <h5 className="Project-ProgrammingLanguage-Display" id="Django">
                  Django
                </h5>
                <h5 className="Project-ProgrammingLanguage-Display" id="HTML">
                  HTML
                </h5>
                <h5 className="Project-ProgrammingLanguage-Display" id="CSS">
                  CSS
                </h5>
              </div>
            </div>
            <div className="Project-Card">
              <h3>Projects to Come</h3>
            </div>
            <div className="Project-Card">
              <h3>Projects to Come</h3>
            </div>
            <div className="Project-Card">
              <h3>Projects to Come</h3>
            </div>
            <div className="Project-Card">
              <h3>Projects to Come</h3>
            </div>
          </div>
        </section>
        <section id="Contact-Section" className="Section">
          <div id="Contact-Content-Grid">
            <div id="Contact-Form-Container">
              <TerminalContact />
            </div>
          </div>
        </section>
        <section id="Footer-Section" className="Section"></section>
      </div>
    </>
  );
}

export default App;
