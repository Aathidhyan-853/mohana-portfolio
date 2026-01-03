import { useState } from "react";
import "./Header.css";
import logo from "../assets/Logo.webp";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-container">
          {/* LOGO – GO TO HERO */}
          <a href="#hero" className="header-logo">
            <div className="logo-box">
              <img src={logo} alt="Mohana Lakshmi B Logo" />
            </div>
          </a>

          {/* DESKTOP NAV */}
          <nav className="header-nav">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#resume">Resume</a>
            <a href="#contact" className="nav-cta">Contact</a>
          </nav>

          {/* HAMBURGER */}
          <div className="hamburger" onClick={() => setOpen(true)}>
            ☰
          </div>
        </div>
      </header>

      {/* 🔥 OVERLAY – CLICK ANYWHERE TO CLOSE */}
      {open && (
        <div
          className="menu-overlay"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* MOBILE SIDE MENU */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <span className="close" onClick={() => setOpen(false)}>✕</span>

        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
        <a href="#resume" onClick={() => setOpen(false)}>Resume</a>
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </div>
    </>
  );
};

export default Header;
