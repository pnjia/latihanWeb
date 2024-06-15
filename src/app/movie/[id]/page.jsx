import { getMovieResponse } from "@/libs/api-libs";
import Image from "next/image";

const Page = async ({ params }) => {
  const apiMovie = await getMovieResponse(params.id);
  console.log({ movie: apiMovie.data });
  const image = process.env.NEXT_PUBLIC_API_IMAGE_URL;
  return (
    <div className="min-h-screen flex justify-center items-center p-2 ">
      <div className="flex bg-red-300 md:flex-row flex-col  items-center justify-center rounded p-2">
        <Image src={`${image}/${apiMovie.data.poster_path}`} width={300} height={500} className="md:mr-4 h-auto" />
        <div className="break-words">
          <h1 className="text-xl font-bold md:text-left text-center">
            {apiMovie.data.title} ({apiMovie.data.release_date.slice(0, 4)})
          </h1>
          <p>
            <strong>Genres :</strong> {apiMovie.data.genres.map((genre) => genre.name).join(", ")}
          </p>
          <p className="text-gray-700">{apiMovie.data.tagline}</p>
          <h2 className="font-semibold">Overview</h2>
          <p>{apiMovie.data.overview}</p>
          <h1>
            <strong>Rating :</strong> {apiMovie.data.vote_average}
          </h1>
          <h1>
            <strong>Status :</strong> {apiMovie.data.status}
          </h1>

          <h1>
            <strong>Companies production :</strong> {apiMovie.data.production_companies.map((company) => company.name).join(", ")}
          </h1>
          <h1>
            <strong>Popularity :</strong> {apiMovie.data.popularity.toLocaleString("en-US")}
          </h1>
          <h1>
            <strong>Budget :</strong> ${apiMovie.data.budget.toLocaleString("en-US")}
          </h1>
          <h1>
            <strong>Revenue :</strong> ${apiMovie.data.revenue.toLocaleString("en-US")}
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Page;
