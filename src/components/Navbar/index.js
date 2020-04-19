import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <nav className="navbar is-link is-changeable is-fixed-top">
      <div className="navbar-brand">
        <div className="navbar-burger burger" data-target="navBarTransparent">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navBarTransparent" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <Link to="/about" className="navbar-item">
              <span className="icon">
                <i className="fas fa-info"></i>
              </span>
              <span>About</span>
            </Link>
          </div>
          <div className="navbar-item">
            <Link to="/resume" className="navbar-item">
              <span className="icon">
                <i className="fas fa-file-alt"></i>
              </span>
              <span>Resume</span>
            </Link>
          </div>

          <div className="navbar-item">
          <Link to="/portfolio" className="navbar-item">
            <span className="icon">
              <i className="fas fa-th-list"></i>
            </span>
            <span>Portfolio</span>
          </Link>
          </div>
          <div className="navbar-item" href="#contact">
          <Link to="/contact" className="navbar-item">
          <span className="icon">
              <i className="fas fa-envelope"></i>
            </span>
            <span>Contact</span>
          </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
