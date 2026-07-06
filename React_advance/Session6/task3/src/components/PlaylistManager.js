import React, { useState, useCallback } from "react";
import SongItem from "./SongItem";

const PlaylistManager = () => {
  const [songs, setSongs] = useState([
    { id: 1, name: "Shape of You", artist: "Ed Sheeran", favorite: false },
    { id: 2, name: "Blinding Lights", artist: "The Weeknd", favorite: false },
    { id: 3, name: "Perfect", artist: "Ed Sheeran", favorite: false },
    { id: 4, name: "Believer", artist: "Imagine Dragons", favorite: false },
    { id: 5, name: "Levitating", artist: "Dua Lipa", favorite: false },
  ]);

  const toggleFavorite = useCallback((id) => {
    setSongs((prevSongs) =>
      prevSongs.map((song) =>
        song.id === id
          ? { ...song, favorite: !song.favorite }
          : song
      )
    );
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">🎵 Playlist Manager</h2>

      {songs.map((song) => (
        <SongItem
          key={song.id}
          song={song}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
};

export default PlaylistManager;