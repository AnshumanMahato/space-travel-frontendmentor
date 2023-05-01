import React from "react";
import { NavLink } from "react-router-dom";

const HeaderNav = ({ onNavigation }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("nav__link")) onNavigation();
  };

  return (
    <nav className="nav">
      <ul className="nav__list" onClick={handleClick}>
        <li className="nav__item">
          <NavLink className="nav__link" to="/">
            <span>00&nbsp;&nbsp;</span>HOME
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/destination">
            <span>01&nbsp;&nbsp;</span>DESTINATION
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/crew">
            <span>02&nbsp;&nbsp;</span>CREW
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/technology">
            <span>03&nbsp;&nbsp;</span>TECHNOLOGY
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
