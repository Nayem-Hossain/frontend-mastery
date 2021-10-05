import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../websiteLogo.png";

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div className="container-fluid mx-5">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="BrandLogo" width="30" height="25" />
          <b> Frontend Mastery</b>
        </NavLink>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav gap-2">
            <li className="nav-item navLink">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/home"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item navLink">
              <NavLink className="nav-link" to="/Teach-on-mastery">
                Teach on Mastery
              </NavLink>
            </li>

            <li className="nav-item navLink">
              <NavLink className="nav-link" to="/services">
                Services
              </NavLink>
            </li>

            <li className="nav-item navLink">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
          </ul>
          <form class="input-group search-width mx-auto">
            <input
              class="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-secondary" type="submit">
              Search
            </button>
          </form>
          <div className="m-2 p-2 btn-outline-danger border border-danger rounded-pill">
            <i class="fas fa-unlock-alt"></i> Login
          </div>
          <div className="m-2 p-2 btn-outline-primary border border-primary rounded-pill">
            <i class="fas fa-user-times"></i> Register
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
