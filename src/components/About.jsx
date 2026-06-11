// import "./About.css";
// function About() {
//   return (
//     <section id="about">
//       <div className="about-container">
//         <h2>About Me</h2>

//        <p>
//   Backend-focused Software Developer with hands-on experience
//   building secure and scalable web applications using Java,
//   Spring Boot, React.js, JWT Authentication, and MySQL.
// </p>

// <p>
//   Through internships and personal projects, I have developed
//   RESTful APIs, authentication systems, database integrations,
//   and full-stack applications while focusing on clean code,
//   performance, and user experience.
// </p>
//       </div>
//     </section>
//   );
// }

// export default About;

import "./About.css";
function About() {
  return (
    <section id="about">
      <div className="about-content">
        <span className="section-tag">About Me</span>

        <h2>
          Building secure and scalable
          <span> web applications.</span>
        </h2>

        <p>
          Java Full Stack Developer passionate about creating
          modern web applications using Spring Boot, React.js,
          and MySQL. I enjoy solving problems, developing REST APIs,
          and building software that delivers real value.
        </p>
      </div>
    </section>
  );
}

export default About;