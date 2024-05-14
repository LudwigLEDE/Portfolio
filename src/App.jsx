import { useState, useEffect } from "react";
import {
  SiAdobeaftereffects,
  SiAdobeillustrator,
  SiAdobecreativecloud,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiIntellijidea,
  SiTailwindcss,
  SiTypescript,
  SiAmazonaws,
  SiAngular,
  SiBlender,
  SiCinema4D,
  SiMicrosoftoffice,
  SiPhp,
  SiSketchup,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import {
  FaGithub,
  FaJava,
  FaHtml5,
  FaCss3,
  FaReact,
  FaBootstrap,
  FaMarkdown,
  FaWordpress,
  FaPython,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiSqllite } from "react-icons/di";

import HeroSection from "./components/HeroSection";
import SettingsButton from "./components/SettingsButton";
import SillsDisplay from "./components/SkillsDisplay";
import FriendsReviews from "./components/FriendsReviews";
import SwipeCarousel from "./components/SwipeCarousel";
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
        <div className="Card Header-Container" id="Header-Logo-Container">
          <img src="src\assets\img\Logo-1.png" alt="Logo" id="Header-Logo" />
        </div>
        <div className="Card Header-Container">
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
        <div className="Card Header-Container" id="Header-Switch-Container">
          <SettingsButton />
        </div>
      </header>
      <div id="Section-Container">
        <section id="Hero-Section" className="Section">
          <div id="Hero-Content-Grid">
            <div className="LogoMe-Container">
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
          <div id="AboutMe-Container">
            <h2>Something about me</h2>
            <ul>
              <li>
                <h3>Me</h3>
                <p>
                  My name is Ludwig Engelhardt, I am 20 years old and still a
                  Student.
                </p>
              </li>
              <li>
                <h3>My background</h3>
                <p>Most of my knowlage came making my own mistakes. </p>
              </li>
              <li>
                <h3>Reviews</h3>
                <p>How my Friend would review me</p>
                <FriendsReviews id="AboutMe-FriendsReviews" />
              </li>
            </ul>
          </div>
        </section>
        <section id="Skills-Section" className="Section">
          <div id="Skills-Container">
            <SillsDisplay />

            <div className="Container">
              <h2>These are the Programming Skills I possess:</h2>
            </div>
            <div className="Card Skills-Card">
              <h3>Programing</h3>
              <FaJava />
              <FaPython />
              <FaHtml5 />
              <FaCss3 />
              <IoLogoJavascript />
              <SiTypescript />
              <SiTailwindcss />
              <FaReact />
              <DiSqllite />
              <FaBootstrap />
              <FaMarkdown />
              <SiAngular />
              <SiPhp />

              <FaWordpress />
              <SiAmazonaws />
            </div>
            <div className="Card Skills-Card">
              <h3>Languages</h3>
              <ul>
                <li>German</li>
                <li>English</li>
                <li>Spanish</li>
              </ul>
            </div>
            <div className="Card Skills-Card">
              <h3>Programms</h3>
              <SiAdobecreativecloud />
              <SiAdobeaftereffects />
              <SiAdobeillustrator />
              <SiAdobephotoshop />
              <SiAdobepremierepro />

              <SiBlender />
              <SiCinema4D />
              <SiSketchup />

              <SiMicrosoftoffice />

              <TbBrandVscode />
              <SiIntellijidea />

              <FaGithub />
            </div>
          </div>
        </section>
        <section id="Projects-Section" className="Section">
          <div id="Project-Title">
            <h2>Projects</h2>
            <h3>These are some of the Projects I have worked on</h3>
          </div>
          <div id="Project-Card-Wrapper">
            <div id="Project-Card-Container-Grid">
              <a
                href="https://github.com/L-Engelhardt-Lette/SwiftShare"
                className="Card Project-Card"
              >
                <h3>SwiftShare</h3>
                <div className="Project-Card-TechStack">
                  <h5 className="Project-ProgrammingLanguage-Display" id="Java">
                    Java
                  </h5>
                </div>
              </a>
              <a
                href="https://github.com/L-Engelhardt-Lette/Chatify"
                className="Card Project-Card"
              >
                <h3>Chatify</h3>
                <div className="Project-Card-TechStack">
                  <h5
                    className="Project-ProgrammingLanguage-Display"
                    id="Django"
                  >
                    Django
                  </h5>
                  <h5 className="Project-ProgrammingLanguage-Display" id="HTML">
                    HTML
                  </h5>
                  <h5 className="Project-ProgrammingLanguage-Display" id="CSS">
                    CSS
                  </h5>
                </div>
              </a>
              <a href="" className="Card Project-Card">
                <h3>Projects to Come</h3>
              </a>
              <a href="" className="Card Project-Card">
                <h3>Projects to Come</h3>
              </a>
              <a href="" className="Card Project-Card">
                <h3>Projects to Come</h3>
              </a>
              <a href="" className="Card Project-Card">
                <h3>Projects to Come</h3>
              </a>
            </div>
          </div>
        </section>
        <section id="Contact-Section" className="Section">
          <div id="Contact-Content-Grid"></div>
        </section>
        <section id="Footer-Section" className="Section"></section>
      </div>
    </>
  );
}

export default App;
