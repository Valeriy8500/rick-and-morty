import React, { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

export function NavigationPanel() {
  return (
    <>
      <div className="navigation-panel">
        <NavLink to="/" className="navigation-panel_home"><h2>R&M</h2></NavLink>
        <NavLink
          to="/characters"
          className="navigation-panel_navlink"
        >
          Герои
        </NavLink>
        <NavLink
          to="/episode"
          className="navigation-panel_navlink"
        >
          Эпизоды
        </NavLink>
        <NavLink
          to="/location"
          className="navigation-panel_navlink"
        >
          Локации
        </NavLink>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
