import React from "react";
import useFetchData from "../hooks/useFetchData";

const SpotifyPlaylists = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/albums";

  const { data, loading, error } = useFetchData(API_URL);

  if (loading) {
    return <h3 className="text-center mt-5">Loading...</h3>;
  }

  if (error) {
    return <h3 className="text-danger text-center mt-5">{error}</h3>;
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Spotify Playlists</h2>

      <div className="row">
        {data.slice(0, 12).map((playlist) => (
          <div className="col-md-4 mb-4" key={playlist.id}>
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">
                  {playlist.title}
                </h5>

                <p className="card-text">
                  Playlist ID: {playlist.id}
                </p>

                <button className="btn btn-success">
                  Open Playlist
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpotifyPlaylists;