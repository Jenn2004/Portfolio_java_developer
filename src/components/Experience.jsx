import "./Experience.css";

function Experience() {
  const experiences = [
    {
      role: "Java Developer",
      company: "Feathers Softwares",
      duration: "Jun 2024 – Jan 2025",
      achievements: [
        "Developed backend modules for the ShopEase e-commerce platform using Java and Spring Boot.",
        "Implemented JWT Authentication and Spring Security to secure REST APIs.",
        "Designed cart management and order processing APIs.",
        "Collaborated with frontend and testing teams to ensure seamless integration.",
      ],
    },

    {
      role: "Software Developer",
      company: "Iconic Cognition",
      duration: "May 2023 – Nov 2023",
      achievements: [
        "Developed Java-based modules for the VisionInspect Image Validation System.",
        "Implemented image validation filters including size, format, and clarity checks.",
        "Integrated MySQL for metadata management and validation tracking.",
        "Improved workflow automation and enhanced processing efficiency.",
      ],
    },
  ];

  return (
    <section id="experience">
      <div className="experience-header">
        <span className="section-tag">Experience</span>

        <h2>Professional Experience</h2>

        <p>
          My experience building backend systems, APIs, and
          full-stack applications through real-world projects.
        </p>
      </div>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span className="duration">
                {exp.duration}
              </span>

              <h3>{exp.role}</h3>

              <h4>{exp.company}</h4>

              <ul>
                {exp.achievements.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
