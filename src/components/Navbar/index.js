import React from 'react'

export default function Navbar() {
    return (
        <nav class="navbar is-link is-changeable is-fixed-top">
    <div class="navbar-brand">
      <div class="navbar-burger burger" data-target="navBarTransparent">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navBarTransparent" class="navbar-menu">
      <div class="navbar-end">
        <a class="navbar-item" href="#about">
          <span class="icon">
            <i class="fas fa-info"></i>
          </span>
          <span>About</span>
        </a>
        <a class="navbar-item" href="#resume">
          <span class="icon">
            <i class="fas fa-file-alt"></i>
          </span>
          <span>Resume</span>
        </a>
        <a class="navbar-item" href="#portfolio">
          <span class="icon">
            <i class="fas fa-th-list"></i>
          </span>
          <span>Portfolio</span>
        </a>
        <a class="navbar-item" href="#contact">
          <span class="icon">
            <i class="fas fa-envelope"></i>
          </span>
          <span>Contact</span>
        </a>
      </div>
    </div>
  </nav>
    )
}
