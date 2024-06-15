import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const getPopularMoviesResponse = async () => {
  console.log("API Base URL:", baseUrl);
  console.log("wouyyyyyyyy");
  console.log("Starting request...");
  console.log("API Base URL:", baseUrl);
  console.log("API Key:", apiKey);
  const movie = await axios.get(`${baseUrl}/3/movie/popular?api_key=${apiKey}`);
  // console.log("request successfull : ", movie.data.results);

  return movie.data.results;
};
export const getMovieResponse = async (id) => {
  const response = await axios.get(`${baseUrl}/3/movie/${id}?api_key=${apiKey}`);
  return response;
};
export const getTopRatedMovieResponse = async () => {
  const response = await axios.get(`${baseUrl}/3/movie/top_rated?api_key=${apiKey}`);
  return response.data.results;
};
export const searchMovie = async (q) => {
  const search = await axios.get(`${baseUrl}/3/search/movie?query=${q}&api_key=${apiKey}`);
  return search.data;
};
