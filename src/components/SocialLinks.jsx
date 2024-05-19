import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../css/SocialLinks.css";

function SocialLinks() {
  const links = [
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/ludwig-engelhardt-498abb224/",
    },
    { icon: <FaGithub />, url: "https://github.com/L-Engelhardt-Lette" },
    { icon: <MdEmail />, url: "mailto:ludwig.engelhardt@gmail.com" },
  ];

  return (
    <div className="Card">
      <h3>Get in Touch</h3>
      <p>Feel free to reach out to me via email or social media!</p>
      <div className="Card-Socials">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="SocialLink"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
}

export default SocialLinks;
