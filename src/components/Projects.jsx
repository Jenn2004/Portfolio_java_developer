import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "ShopSphere",
      description:
        "Full-stack e-commerce application with JWT Authentication, Role-Based Access Control, product management, and Razorpay payment integration.",

      technologies: [
        "Spring Boot",
        "React",
        "MySQL",
        "JWT",
        "Razorpay",
      ],

      github: "https://github.com/Jenn2004/salessavy-project",

      live: "https://your-demo-link.com",
    },

    {
      title: "TaskBuddy",

      description:
        "Task management application with secure authentication, CRUD operations, and MySQL database integration.",

      technologies: [
        "React",
        "Spring Boot",
        "REST API",
        "MySQL",
      ],

      github: "https://github.com/Jenn2004/Task_manager_project",

      live: "https://react-learning-4uuu908ej-jenn2004s-projects.vercel.app",
    },

    {
      title: "DriveEase",

      description:
        "Car rental management system for vehicle booking, availability tracking, and customer management.",

      technologies: [
        "Java",
        "Spring Boot",
        "MySQL",
      ],

      github: "https://github.com/Jenn2004/Friday-batch_Car-Rental-Application-with-Django-Framework_JENIFER-J-4024-SMCE",

      live: "https://react-learning-4uuu908ej-jenn2004s-projects.vercel.app",
    },
  ];

  return (
    <section id="projects">
      <div className="projects-header">
        <span className="section-tag">Projects</span>

        <h2>Featured Projects</h2>

        <p>
          A collection of projects showcasing my experience
          in backend development, full-stack applications,
          and database-driven systems.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tech-stack">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;