import React from "react";
import HeaderNav from "./HeaderNav";

const Header = (props) => {
  return (
    <header>
      <div className="logo">
        <img src="/assets/shared/logo.svg" alt="space-tourism-logo" />
      </div>
      <hr />
      <input class="nav__checkbox" id="nav-toggle" type="checkbox" />
      <label class="nav__button" for="nav-toggle">
        <span class="nav__icon">&nbsp;</span>
      </label>
      <HeaderNav />
    </header>
  );
};

export default Header;
