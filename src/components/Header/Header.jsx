import React from "react";
import './Header.css';

function Header() {
  return (
    <header className="header-container container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <a className="navbar-brand" href="#">
          <img src="/images/ventourio.png" alt="Logo" className="logo" />
        </a>

        <div className="d-flex align-items-center gap-3 d-lg-none ms-auto">
          <img src="/images/user.png" alt="Profile" className="profile-icon" />
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img src="/images/menu.png" alt="menu" className="menu-icon" />
          </button>
        </div>


        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto gap-3">
            <li className="nav-item"><a href="#book" className="nav-link">Book</a></li>
            <li className="nav-item"><a href="#guideline" className="nav-link">Guideline</a></li>
            <li className="nav-item"><a href="#hot_deals" className="nav-link"><b>HOT</b> deals</a></li>
            <li className="nav-item"><a href="#services" className="nav-link">Services</a></li>
          </ul>

            <div className="d-flex flex-row flex-lg-row align-items-start align-items-lg-center gap-3 mt-3 mt-lg-0">
                <div className="euro fw-bold">€</div>
                <img className="flag" src="/images/united-kingdom.png" alt="UK" />
                <a href="#login" className="text-dark text-decoration-none">Log in</a>
                <button className="sign-up">Sign Up</button>
            </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
