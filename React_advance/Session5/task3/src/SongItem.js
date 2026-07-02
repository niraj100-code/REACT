import React from "react";

function SongItem({ song, dispatch }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      🎵 {song.name}

      <button
        className="btn btn-danger btn-sm"
        onClick={() =>
          dispatch({
            type: "REMOVE_SONG",
            payload: song.id,
          })
        }
      >
        Delete
      </button>
    </li>
  );
}

export default SongItem;