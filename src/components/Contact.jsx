import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import "./Contact.css";

function Contact() {
  return (
    <section id="contact">
      <span className="section-tag">Contact</span>

      <h2>Let's Connect</h2>

      <p className="contact-text">
        I'm currently open to software development opportunities,
        collaborations, and interesting projects.
      </p>

      <div className="contact-links">
        <a href="mailto:jenifer.j2004@gmail.com">
          <FaEnvelope />
          <span>jenifer.j2004@gmail.com</span>
        </a>

        <a href="tel:+919488432843">
          <FaPhone />
          <span>+91 94884 32843</span>
        </a>

        <a
          href="https://www.linkedin.com/in/jenifer-j-7551232a0/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://github.com/Jenn2004"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
          <span>GitHub</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;