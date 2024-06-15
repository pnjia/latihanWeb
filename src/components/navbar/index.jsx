import Link from "next/link";
import InputSearch from "./inputSearch";

const Navbar = () => {
  return (
    <div className="bg-red-600 p-3 flex flex-row justify-between min-w-full">
      <Link href="/" className="cursor-pointer">
        <h1 className="text-2xl  font-bold text-white">ZexMovieList</h1>
      </Link>
      <InputSearch />
    </div>
  );
};
export default Navbar;
