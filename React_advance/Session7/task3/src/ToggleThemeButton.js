import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ToggleThemeButton() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className="btn btn-primary"
      onClick={toggleTheme}
    >
      Toggle Theme
    </button>
  );
}

export default ToggleThemeButton;