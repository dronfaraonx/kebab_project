import React from "react";
import { NavLink } from "react-router-dom";

// src/components/Layout.tsx
const Layout = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink
        className="nav-link active"
        aria-current="page"
        to="/"
      >
        <div className="navbar-brand">
          Kebab Delivery
        </div>
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink
              className="nav-link active"
              aria-current="page"
              to="/registration"
            >
              Registration
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Layout;

{
  /* <div className="collapse navbar-collapse" id="navbarNavDropdown">
  <ul className="navbar-nav">
    <li className="nav-item active">
      <a className="nav-link" href="#">
        Home <span className="sr-only">(current)</span>
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">
        Features
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">
        Pricing
      </a>
    </li>
  </ul>
</div> */
}
