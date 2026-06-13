import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";
import profileImg from "../assets/images/Jeniferj.jpg";
import "./Sidebar.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Sidebar() {
  return (
    
    <div className="sidebar">
      
      <img src={profileImg} alt="profile" className="profile-image" />

      <h2>Jenifer J</h2>

      <p>Java Full Stack Developer</p>

      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="socials">
        <a href="https://github.com/Jenn2004" target="_blank" rel="noreferrer">
         <FaGithub />
        </a>

        <a href="https://www.linkedin.com/in/jenifer-j-7551232a0/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>

        <a href="mailto:jenifer.j2004@gmail.com">
          <FaEnvelope />
        </a>
      </div>

    </div>
  );
}

export default Sidebar;