import React from "react";

const Header = (props) => {
  const navigate = (e) => {
    e.preventDefault();
    const { target } = e.target.dataset;
    props.navigator(target);
    const navitem = e.target.closest("li");
    navitem.closest("ul").querySelector(".active").classList.remove("active");
    navitem.classList.contains("active") || navitem.classList.add("active");
  };
  return (
    <header>
      <div className="logo">
        <img src="/assets/shared/logo.svg" alt="space-tourism-logo" />
      </div>
      <hr />
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item active">
            <a
              onClick={navigate}
              className="nav__link"
              href="/"
              data-target="home"
            >
              <span>00</span>&nbsp;&nbsp;HOME
            </a>
          </li>
          <li className="nav__item">
            <a
              onClick={navigate}
              className="nav__link"
              href="/"
              data-target="destination"
            >
              <span>01</span>&nbsp;&nbsp;DESTINATION
            </a>
          </li>
          <li className="nav__item">
            <a
              onClick={navigate}
              className="nav__link"
              href="/"
              data-target="crew"
            >
              <span>02</span>&nbsp;&nbsp;CREW
            </a>
          </li>
          <li className="nav__item">
            <a
              onClick={navigate}
              className="nav__link"
              href="/"
              data-target="technology"
            >
              <span>03</span>&nbsp;&nbsp;TECHNOLOGY
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
