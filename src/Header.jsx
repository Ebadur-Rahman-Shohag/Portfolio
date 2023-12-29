import React from "react";
import { Link } from "react-scroll";
import "./Header.css";

function Header() {
  return (
    <div className="navbar-container">
      <h2 className="logo">Shohag</h2>
      <ul className="nav-links">
        <Link className="nav-item" to="/">
          Home
        </Link>

        <Link className="nav-item" to="about" spy={true} smooth={true} offset={50} duration={500}>
          About
        </Link>

        <Link className="nav-item" to="skill" spy={true} smooth={true} offset={50} duration={500}>
          Skill
        </Link>

        <Link className="nav-item" to="project" spy={true} smooth={true} offset={50} duration={500}>
          Project
        </Link>
        <Link className="nav-item" to="contact" spy={true} smooth={true} offset={50} duration={500}>
          Contact
        </Link>
      </ul>
    </div>
  );
}

export default Header;
