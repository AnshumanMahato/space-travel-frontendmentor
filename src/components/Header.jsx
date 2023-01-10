import React from "react";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="/assets/shared/logo.svg" alt="space-tourism-logo" />
      </div>
      <hr />
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a className="nav__link" href="/">
              HOME
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="/">
              DESTINATIONS
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="/">
              CREW
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="/">
              TECHNOLOGY
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
