import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function PostCard() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`card mt-4 ${
        theme === "dark"
          ? "bg-dark text-white"
          : "bg-light text-dark"
      }`}
    >
      <div className="card-body">
        <h4>Post Card</h4>
        <p>This component uses ThemeContext.</p>
        <p>Current Theme: {theme}</p>
      </div>
    </div>
  );
}

export default PostCard;