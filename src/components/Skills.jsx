import { useState } from "react";
import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaDatabase,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiJavascript,
  SiMysql,
  SiPostman,
  SiHibernate,
} from "react-icons/si";

import { BsDatabaseFill } from "react-icons/bs";

import "./Skills.css";

function Skills() {
  const skills = {
    Backend: [
      { name: "Java", icon: <FaJava /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Spring Security", icon: <SiSpringboot /> },
      { name: "REST APIs", icon: <BsDatabaseFill /> },
      { name: "JWT Authentication", icon: <BsDatabaseFill /> },
      { name: "Hibernate", icon: <SiHibernate /> },
      { name: "JPA", icon: <SiHibernate /> },
    ],

    Frontend: [
      { name: "React.js", icon: <FaReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
    ],

    Database: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Oracle SQL", icon: <FaDatabase /> },
    ],

    Tools: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Docker", icon: <FaDocker /> },
    ],

    Concepts: [
      { name: "OOP", icon: "🧩" },
      { name: "Data Structures", icon: "📚" },
      { name: "Collections", icon: "📦" },
      { name: "Exception Handling", icon: "⚠️" },
      { name: "JDBC", icon: "🔌" },
      { name: "Multithreading", icon: "⚙️" },
      { name: "MVC Architecture", icon: "🏗️" },
      { name: "SDLC", icon: "🔄" },
    ],
  };

  const [activeTab, setActiveTab] = useState("Backend");

  return (
    <section id="skills">
      <div className="skills-header">
        <span className="section-tag">Skills</span>

        <h2>Technologies I Work With</h2>

        <p>
          A collection of technologies, tools, and concepts I use
          to build modern web applications.
        </p>
      </div>

      <div className="tabs">
        {Object.keys(skills).map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "tab active" : "tab"}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {skills[activeTab].map((skill, index) => (
          <div className="skill-card" key={index}>
            <span className="skill-icon">{skill.icon}</span>

            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
