import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumps";
const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1><Link to="/">Jobrouter</Link></h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="carrers">Careers</NavLink>
        </nav>
        <Breadcrumbs />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
