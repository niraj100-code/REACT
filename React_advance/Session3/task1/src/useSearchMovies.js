import { useState, useEffect } from "react";

function useSearchMovies(query) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (query.trim() === "") {
      setMovies([]);
      return;
    }

    const fetchMovies = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=3ff417c6&s=${query}`
        );

        const data = await response.json();

        if (data.Response === "True") {
          setMovies(data.Search);
          setError("");
        } else {
          setMovies([]);
          setError(data.Error);
        }
      } catch (err) {
        setError("Something went wrong");
      }

      setLoading(false);
    };

    fetchMovies();
  }, [query]);

  return { movies, loading, error };
}

export default useSearchMovies;