import React from "react";
import { NavLink } from "react-router-dom";

const HeaderNav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink className="nav__link" to="/">
            <span>00</span>&nbsp;&nbsp;HOME
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/destination">
            <span>01</span>&nbsp;&nbsp;DESTINATION
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/crew">
            <span>02</span>&nbsp;&nbsp;CREW
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/technology">
            <span>03</span>&nbsp;&nbsp;TECHNOLOGY
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
