import React from "react";
import HeaderNav from "./HeaderNav";

const Header = (props) => {
  return (
    <header>
      <div className="logo">
        <img src="/assets/shared/logo.svg" alt="space-tourism-logo" />
      </div>
      <hr />
      <HeaderNav />
    </header>
  );
};

export default Header;
