import { useState, useEffect } from "react";

function useSearchMovies(query) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch movies when query changes
  useEffect(() => {
    if (query.trim() === "") {
      setMovies([]);
      setError("");
      return;
    }

    const fetchMovies = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=3ff417c6&s=${query}`
        );

        const data = await response.json();

        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setMovies([]);
          setError(data.Error);
        }
      } catch (err) {
        setError("Failed to fetch movies.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  // Second useEffect: Runs whenever movie data changes
  useEffect(() => {
    console.log("Movie data updated:", movies);
  }, [movies]);

  return { movies, loading, error };
}

export default useSearchMovies;