import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`container mt-5 text-center ${
        theme === "dark"
          ? "bg-dark text-white"
          : "bg-light text-dark"
      }`}
      style={{
        minHeight: "300px",
        padding: "30px",
        borderRadius: "10px",
      }}
    >
      <h1>Insta Theme Demo</h1>

      <h3>Current Theme: {theme}</h3>

      <button
        className="btn btn-primary mt-3"
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default App;