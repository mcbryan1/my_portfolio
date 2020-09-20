import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent stroke shadow">
        <Link className="navbar-brand ml-5 my__name" to="/">
          M<span>S</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav navbar-center">
            <li className="nav-item navs">
              <Link to="/" className="nav-link">
              <a href="about">Home</a>
              </Link>
            </li>
            <li className="nav-item navs">
              <Link className="nav-link" to="/about"><a href="about">About</a>
                
              </Link>
            </li>
            <li className="nav-item navs">
              <Link className="nav-link" to="/portfolio">
              <a href="about">Portfolio</a>
              </Link>
            </li>
            <li className="nav-item navs">
              <Link className="nav-link" to="./contact">
              <a href="about">Contact</a>
              </Link>
            </li>
          </ul>
          <button className="btn btn-primary mr-5 button rounded ml-auto">Hire Me</button>
        </div>
      </nav>
    </div>
  );
}
