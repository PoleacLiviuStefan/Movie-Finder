import React from "react";
import Movie from "../MovieCard/Movie";
const MovieDescription = ({ movie }) => {
  return (
    <div className="absolute flex justify-center items-center left-0 top-0  w-full h-full bg-black-300">
      <Movie movie={movie} />
    </div>
  );
};

export default MovieDescription;
