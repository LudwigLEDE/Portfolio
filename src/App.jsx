import { useState, useEffect } from "react";

import HeroSection from "./components/HeroSection";
import TerminalContact from "./components/TerminalContact";
import Logo from "./components/Logo";
import { Hero } from "./components/Hero";

import "./css/Button.css";
import "./css/App.css";

function App() {
  const [activeSection, setActiveSection] = useState("Hero-Section");

  // Automatically scroll to the Hero section on initial load
  useEffect(() => {
    const heroSection = document.getElementById("Hero-Section");
    if (heroSection) {
      heroSection.scrollIntoView();
    }
  }, []);

  const navItems = [
    { href: "#Hero-Section", label: "Home" },
    { href: "#AboutMe-Section", label: "About Me" },
    { href: "#Skills-Section", label: "Skills" },
    { href: "#Projects-Section", label: "Projects" },
    { href: "#Contact-Section", label: "Contact" },
    { href: "#Impressum", label: "Impressum" },
  ];

  // Handler to set active section
  const handleNavClick = (e, sectionId) => {
    e.preventDefault(); // Prevent default anchor behavior
    setActiveSection(sectionId);

    const sectionEl = document.getElementById(sectionId);
    if (sectionEl) {
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header>
        <div className="Header-Container" id="Header-Logo-Container">
          <Logo />
          <p>Logo</p>
        </div>
        <div className="Header-Container">
          <nav>
            <ul>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={
                    activeSection === item.href.substring(1) ? "active" : ""
                  }
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href.substring(1))}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="Header-Container" id="Header-Switch-Container">
          {/* Add content for the first header container if needed */}
        </div>
      </header>
      <div id="Section-Container">
        <section id="Hero-Section" className="Section">
          <div id="Hero-Content-Grid">
            <div className="Logo-Container">
              <img src="./src/assets/img/Me.jpeg" alt="Me Logo" />
            </div>
            <div className="Hero-Grid-Item">
              <HeroSection />
            </div>
            <div className="Hero-Grid-Item">
              <a href="#Projects-Section" className="Hero-Button">
                Projects
              </a>
              <a href="#Contact-Section" className="Hero-Button">
                Contact Me
              </a>
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
