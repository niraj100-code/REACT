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
        className="form-control"
        placeholder="Search Movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && <h4 className="mt-3">Loading...</h4>}

      {error && <h4 className="text-danger mt-3">{error}</h4>}

      <div className="row mt-4">
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
                <p>Year: {movie.Year}</p>
                <p>Type: {movie.Type}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieSearch;