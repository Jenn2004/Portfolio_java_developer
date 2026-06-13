import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./MobileNavbar.css";

function MobileNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="mobile-navbar">
      <div className="mobile-header">
        <h3>Jenifer J</h3>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <nav className="mobile-menu">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      )}
    </div>
  );
}

export default MobileNavbar;