import React, { useState } from "react";

function SongItem({ song, dispatch }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(song.name);

  const saveSong = () => {
    dispatch({
      type: "EDIT_SONG",
      payload: {
        id: song.id,
        name: newName,
      },
    });

    setIsEditing(false);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">

      {isEditing ? (
        <input
          type="text"
          className="form-control me-2"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      ) : (
        <span>🎵 {song.name}</span>
      )}

      <div>
        {isEditing ? (
          <button
            className="btn btn-success btn-sm me-2"
            onClick={saveSong}
          >
            Save
          </button>
        ) : (
          <button
            className="btn btn-warning btn-sm me-2"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}

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
      </div>
    </li>
  );
}

export default SongItem;