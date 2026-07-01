import React from "react";

function PlaylistCard(props) {
  return (
    <div className="card">
      <h2>{props.song}</h2>
      <p>
        <strong>Artist:</strong> {props.artist}
      </p>
    </div>
  );
}

export default PlaylistCard;