import Movie from "@/components/listMovie";
import { getTopRatedMovieResponse, getPopularMoviesResponse } from "@/libs/api-libs";

export default async function Home() {
  const popularMovies = await getPopularMoviesResponse();
  const popularTitle = "Paling populer";
  const nowPlayingTitle = "Paling top";
  const nowPlayingMovies = await getTopRatedMovieResponse();
  console.log({ nowPlayingMovies: nowPlayingMovies });
  const image = process.env.NEXT_PUBLIC_API_IMAGE_URL;
  return (
    <div className="min-h-screen">
      <Movie api={popularMovies} title={popularTitle} apiImage={image} />
      <Movie api={nowPlayingMovies} title={nowPlayingTitle} apiImage={image} />
    </div>
  );
}
