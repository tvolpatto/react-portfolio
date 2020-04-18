import React from 'react'

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
        <a className="navbar-item" href="#about">
          <span className="icon">
            <i className="fas fa-info"></i>
          </span>
          <span>About</span>
        </a>
        <a className="navbar-item" href="#resume">
          <span className="icon">
            <i className="fas fa-file-alt"></i>
          </span>
          <span>Resume</span>
        </a>
        <a className="navbar-item" href="#portfolio">
          <span className="icon">
            <i className="fas fa-th-list"></i>
          </span>
          <span>Portfolio</span>
        </a>
        <a className="navbar-item" href="#contact">
          <span className="icon">
            <i className="fas fa-envelope"></i>
          </span>
          <span>Contact</span>
        </a>
      </div>
    </div>
  </nav>
    )
}
