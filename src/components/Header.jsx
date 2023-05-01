import React, { useState } from "react";
import HeaderNav from "./HeaderNav";

const Header = (props) => {
  let [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  const closeNav = () => {
    setChecked(false);
  };

  return (
    <header>
      <div className="logo">
        <img src="/assets/shared/logo.svg" alt="space-tourism-logo" />
      </div>
      <hr />
      <input
        className="nav__checkbox"
        id="nav-toggle"
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <label className="nav__button" htmlFor="nav-toggle">
        <span className="nav__icon">&nbsp;</span>
      </label>
      <HeaderNav onNavigation={closeNav} />
    </header>
  );
};

export default Header;
