import React from "react";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-sm navbar-primary bg-primary">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#">
            Lead Manager
          </a>
        </div>
        {/* {isAuthenticated ? authLinks : guestLinks} */}
      </div>
    </nav>
  );
}
