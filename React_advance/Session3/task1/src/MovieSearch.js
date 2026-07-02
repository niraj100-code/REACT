import React, { useState } from "react";
import useSearchMovies from "./useSearchMovies";

function MovieSearch() {
  const [query, setQuery] = useState("");

  const { movies, loading, error } = useSearchMovies(query);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Movie Search App</h2>

      <input
        type="text"
        className="form-control"
        placeholder="Search movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <br />

      {loading && <h4>Loading...</h4>}

      {error && <h4 className="text-danger">{error}</h4>}

      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-4 mb-3" key={movie.imdbID}>
            <div className="card h-100">
              <img
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://via.placeholder.com/300x450?text=No+Image"
                }
                className="card-img-top"
                alt={movie.Title}
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