import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import ToggleThemeButton from "./ToggleThemeButton";

function Navbar() {
  const { theme } = useContext(ThemeContext);

  return (
    <nav
      className={`navbar ${
        theme === "dark"
          ? "navbar-dark bg-dark"
          : "navbar-light bg-light"
      }`}
    >
      <div className="container">
        <span className="navbar-brand">Instagram</span>

        <ToggleThemeButton />
      </div>
    </nav>
  );
}

export default Navbar;