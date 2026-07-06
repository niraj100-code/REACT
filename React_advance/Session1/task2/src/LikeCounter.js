import React, { useState } from "react";

function LikeCounter() {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="card p-4 text-center shadow mt-5 mx-auto" style={{ width: "22rem" }}>
      <h2>📸 Instagram Post</h2>

      <h4 className="my-3">
        ❤️ Likes: <span className="badge bg-danger">{likes}</span>
      </h4>

      <button className="btn btn-danger" onClick={handleLike}>
        ❤️ Like
      </button>
    </div>
  );
}

export default LikeCounter;