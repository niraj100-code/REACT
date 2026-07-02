import React, { useContext } from "react";
import UserContext from "./UserContext";

function LikeButton() {
  const user = useContext(UserContext);

  return (
    <div className="card p-3 mt-3">
      <h5>Like Button Component</h5>

      <p>
        Welcome, <strong>{user.name}</strong>
      </p>

      <button className="btn btn-primary">
        👍 Like
      </button>
    </div>
  );
}

export default LikeButton;