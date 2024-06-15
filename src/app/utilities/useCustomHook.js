import { useState, useEffect } from "react";
import { getPopularMoviesResponse } from "@/libs/api-libs";

export const UseCustomHook = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPopularMoviesResponse();
      setMovies(response);
    };

    fetchData();
  }, []);

  return { movies, setMovies };
};
