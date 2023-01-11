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
              <span>00</span>&nbsp;&nbsp;HOME
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="/">
              <span>01</span>&nbsp;&nbsp;DESTINATION
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="/">
              <span>02</span>&nbsp;&nbsp;CREW
            </a>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="/">
              <span>03</span>&nbsp;&nbsp;TECHNOLOGY
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
