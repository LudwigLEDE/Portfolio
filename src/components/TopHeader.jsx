import React, { useState, useEffect } from "react";
import "../css/TopHeader.css";

const TopHeader = () => {
  const [isShrunk, setShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShrunk(true);
      } else {
        setShrunk(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isShrunk ? "shrunk" : ""}`}>
      <div>
        <a href="#Hero-Section">Home</a>
        <a href="#AboutMe-Section">About Me</a>
        <a href="#Skills-Section">Skills</a>
        <a href="#Projects-Section">Projects</a>
        <a href="#Contact-Section">Contact</a>
      </div>
    </header>
  );
};

export default TopHeader;
