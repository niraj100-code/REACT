import React from "react";

const SongItem = ({ song, toggleFavorite }) => {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5>{song.name}</h5>
          <p className="mb-0 text-muted">{song.artist}</p>
        </div>

        <button
          className={`btn ${
            song.favorite ? "btn-warning" : "btn-outline-secondary"
          }`}
          onClick={() => toggleFavorite(song.id)}
        >
          {song.favorite ? "★ Favorite" : "☆ Favorite"}
        </button>
      </div>
    </div>
  );
};

export default SongItem;