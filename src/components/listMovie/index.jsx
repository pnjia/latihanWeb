"use client";
import Image from "next/image";
import Header from "./header";
import { useState } from "react";
import Link from "next/link";

const Movie = ({ api, title, apiImage }) => {
  return (
    <>
      <Header title={title} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-4 mb-2">
        {api?.map((movie) => {
          const [imgSrc, setImgSrc] = useState(`${apiImage}/${movie.poster_path}`);
          const handleError = () => {
            setImgSrc("/404.jpg");
          };
          return (
            <Link href={`/movie/${movie.id}`} className="cursor-pointer">
              <div key={movie.id} className="max-w-xs text-center overflow-hidden bg-white p-3 mx-auto ">
                <Image src={imgSrc} alt="poster film" onError={handleError} title={movie.title} width={400} height={200} className="w-full rounded" />

                <h1 className="font-bold text-l mb-2 mt-2 ">{movie.title}</h1>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Movie;
