import React from "react";
import PlaylistCard from "./PlaylistCard";
import "./index.css";

function App() {
  return (
    <div className="container">
      <h1>🎵 My Playlist</h1>

      <PlaylistCard
        song="Shape of You"
        artist="Ed Sheeran"
      />

      <PlaylistCard
        song="Perfect"
        artist="Ed Sheeran"
      />

      <PlaylistCard
        song="Blinding Lights"
        artist="The Weeknd"
      />
    </div>
  );
}

export default App;