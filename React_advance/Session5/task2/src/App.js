import React, { useReducer, useState } from "react";
import playlistReducer from "./playlistReducer";

function App() {
  const [songs, dispatch] = useReducer(playlistReducer, [
    { id: 1, name: "Shape of You" },
    { id: 2, name: "Believer" },
    { id: 3, name: "Perfect" },
  ]);

  const [songName, setSongName] = useState("");

  const addSong = () => {
    if (songName.trim() === "") return;

    dispatch({
      type: "ADD_SONG",
      payload: songName,
    });

    setSongName("");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">🎵 Spotify Playlist Manager</h2>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter song name"
          value={songName}
          onChange={(e) => setSongName(e.target.value)}
        />

        <button
          className="btn btn-success"
          onClick={addSong}
        >
          Add
        </button>
      </div>

      <ul className="list-group">
        {songs.map((song) => (
          <li key={song.id} className="list-group-item">
            🎶 {song.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;