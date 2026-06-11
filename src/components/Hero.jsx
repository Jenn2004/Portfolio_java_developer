import "./Hero.css";
function Hero() {
  return (
    <section id="home" className="hero">
      <p className="intro">Hello 👋</p>

      <h1>
        Hi, I'm <span>Jenifer J</span>
      </h1>

      <h2>Java Full Stack Developer</h2>

      <p className="description">
        Backend-focused Software Developer specializing in Java,
        Spring Boot, React.js, JWT Authentication and MySQL.
      </p>

      <div className="buttons">
        <a href="https://drive.google.com/file/d/1SyLVFjfO21mZFQcYxjWyOPNy3xpDabW6/view?usp=drive_link" download>
          <button className="primary-btn">
            Download Resume
          </button>
        </a>

        <button className="secondary-btn">
          View Projects
        </button>
      </div>
    </section>
  );
}

export default Hero;