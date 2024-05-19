// App.jsx

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
  FaLinkedin,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiSqllite } from "react-icons/di";

import HeroSection from "./components/HeroSection";
import FriendsReviews from "./components/FriendsReviews";
import SwipeCarousel from "./components/SwipeCarousel";
import SkillsProgress from "./components/SkillsProgress";
import SocialLinks from "./components/SocialLinks";
import { Hero } from "./components/Hero";

import "./css/Button.css";
import "./css/App.css";

function App() {
  const [activeSection, setActiveSection] = useState("Hero-Section");

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
  ];

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setActiveSection(sectionId);

    const sectionEl = document.getElementById(sectionId);
    if (sectionEl) {
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header>
        <div className="Card Header-Container">
          <img src="src\assets\img\Logo-1.png" alt="Logo" id="Logo" />
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
            <div className="Container">
              <h2>These are the Programming Skills I possess:</h2>
            </div>
            <div className="Card Skills-Card-Grid">
              <h3>Frontend Coding</h3>

              <div className="Skills-Display-Icons">
                <FaHtml5 />
                <FaCss3 />
                <FaMarkdown />
                <FaBootstrap />
                <FaWordpress />
                <SiTailwindcss />
              </div>
              <SkillsProgress value={69}></SkillsProgress>
              <div id="BLANK"></div>
              <h3>Backend Coding</h3>
              <div className="Skills-Display-Icons">
                <SiTypescript />
                <FaJava />
                <FaPython />
                <SiPhp />
                <IoLogoJavascript />
                <DiSqllite />
                <SiAmazonaws />
                <SiAngular />
              </div>
              <SkillsProgress value={49}></SkillsProgress>
              <div id="BLANK"></div>
              <h3>Creative Work</h3>
              <div className="Skills-Display-Icons">
                <SiAdobecreativecloud />
                <SiAdobeaftereffects />
                <SiAdobeillustrator />
                <SiAdobephotoshop />
                <SiAdobepremierepro />
                <SiBlender />
                <SiCinema4D />
                <SiSketchup />
              </div>
              <SkillsProgress value={39}></SkillsProgress>
              <div id="BLANK"></div>
              <h3>Programms</h3>
              <div className="Skills-Display-Icons">
                <SiMicrosoftoffice />

                <TbBrandVscode />
                <SiIntellijidea />

                <FaGithub />
              </div>
              <SkillsProgress value={54}></SkillsProgress>
              <div id="BLANK"></div>
              <div className="">
                <h3>Languages</h3>
                <ul>
                  <li>German</li>
                  <SkillsProgress value={84}></SkillsProgress>
                  <li>English</li>
                  <SkillsProgress value={90}></SkillsProgress>
                  <li>Spanish</li>
                  <SkillsProgress value={20}></SkillsProgress>
                </ul>
              </div>
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
          <div id="Contact-Content">
            <SocialLinks />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
