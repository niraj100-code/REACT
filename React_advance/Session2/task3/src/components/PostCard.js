import React from "react";
import useLikeButton from "../hooks/useLikeButton";

const PostCard = () => {
  const { liked, likes, toggleLike } = useLikeButton(120);

  return (
    <div className="container mt-5">
      <div className="card mx-auto shadow" style={{ width: "22rem" }}>
        <img
          src="https://picsum.photos/350/220"
          className="card-img-top"
          alt="Post"
        />

        <div className="card-body text-center">
          <h4 className="card-title">Beautiful Nature 🌿</h4>
          <p className="card-text">
            Enjoy the beauty of nature and don't forget to like this post.
          </p>

          <button
            className={`btn ${liked ? "btn-danger" : "btn-outline-danger"}`}
            onClick={toggleLike}
          >
            {liked ? "❤️ Liked" : "🤍 Like"}
          </button>

          <h5 className="mt-3">{likes} Likes</h5>
        </div>
      </div>
    </div>
  );
};

export default PostCard;