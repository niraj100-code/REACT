import React from "react";
import useTrendingMovies from "./useTrendingMovies";

const MoviesList = () => {
  const { movies, loading, error } = useTrendingMovies();

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h1>Trending Movies</h1>

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <strong>{movie.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;