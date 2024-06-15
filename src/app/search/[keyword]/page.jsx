import Movie from "@/components/listMovie";
import { searchMovie } from "@/libs/api-libs";

const Page = async ({ params }) => {
  let keyword = params.keyword;
  keyword = decodeURI(keyword);
  const title = "Pencarian untuk " + keyword + "...";
  const image = process.env.NEXT_PUBLIC_API_IMAGE_URL;
  const search = async (q) => {
    const response = await searchMovie(q);
    return response.results;
  };
  const searchApi = await search(keyword);
  console.log({ api: searchApi });
  return (
    <div>
      <Movie api={searchApi} title={title} apiImage={image} />
    </div>
  );
};
export default Page;
