import React, { useReducer, useState } from "react";
import playlistReducer from "./playlistReducer";

function App() {
  const [songs, dispatch] = useReducer(playlistReducer, []);
  const [songName, setSongName] = useState("");

  const addSong = () => {
    if (songName.trim() === "") return;

    dispatch({
      type: "ADD_SONG",
      payload: {
        id: Date.now(),
        name: songName,
      },
    });

    setSongName("");
  };

  const removeSong = (id) => {
    dispatch({
      type: "REMOVE_SONG",
      payload: id,
    });
  };

  return (
    <div className="container mt-4">
      <h2>Playlist Manager</h2>

      <input
        type="text"
        className="form-control"
        placeholder="Enter Song Name"
        value={songName}
        onChange={(e) => setSongName(e.target.value)}
      />

      <button
        className="btn btn-primary mt-3"
        onClick={addSong}
      >
        Add Song
      </button>

      <ul className="list-group mt-3">
        {songs.map((song) => (
          <li
            key={song.id}
            className="list-group-item d-flex justify-content-between"
          >
            {song.name}

            <button
              className="btn btn-danger btn-sm"
              onClick={() => removeSong(song.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;