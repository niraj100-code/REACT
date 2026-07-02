import React, { useState } from "react";
import useSearchMovies from "./useSearchMovies";

function MovieSearch() {
  const [query, setQuery] = useState("");

  const { movies, loading, error } = useSearchMovies(query);

  return (
    <div className="container mt-4">
      <h2>Movie Search</h2>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search Movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && (
        <div className="text-center">
          <div className="spinner-border text-primary"></div>
        </div>
      )}

      {error && (
        <div className="alert alert-danger mt-3">
          {error}
        </div>
      )}

      <div className="row mt-3">
        {movies.map((movie) => (
          <div className="col-md-4 mb-3" key={movie.imdbID}>
            <div className="card">
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="card-img-top"
              />
              <div className="card-body">
                <h5>{movie.Title}</h5>
                <p>{movie.Year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieSearch;