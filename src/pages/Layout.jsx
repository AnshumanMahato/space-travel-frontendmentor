import React from "react";
import { useLocation, Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  let { pathname } = useLocation();
  const page = pathname.slice(1).length ? pathname.slice(1) : "home";
  return (
    <div className={`background background-${page}`}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
