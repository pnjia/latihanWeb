"use client";
import { searchMovie } from "@/libs/api-libs";
import { useRef } from "react";
import Movie from "../listMovie";
import { useRouter } from "next/navigation";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (e) => {
    const keyword = searchRef.current.value;
    if (!keyword || keyword.trim() == "") return;
    if (e.key === "Enter") {
      e.preventDefault();
      console.log({ search: keyword });
      router.push(`/search/${keyword}`);
    }
  };
  return (
    <div className="md:w-1/4 w-2/5">
      <input type="text" placeholder="cari film..." ref={searchRef} onKeyDown={handleSearch} className="outline-none p-1 rounded-md w-full text-center" />
    </div>
  );
};
export default InputSearch;
