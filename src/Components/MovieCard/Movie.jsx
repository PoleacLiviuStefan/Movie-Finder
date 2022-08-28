import React, { useState } from "react";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Link,
} from "react-router-dom";
import MovieDescription from "../MovieDescription/MovieDescription";
const Movie = ({ movie }) => {
  const DEFAULT_PLACEHOLDER_IMAGE =
    "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  const navigate = useNavigate();
  const location = useLocation();
  let path = movie.Title.split(" ").join("-");
  const showhandler = () => {
    console.log(movie.Title);
    if (location.pathname != `/${path}`) {
      navigate(path);
      localStorage.setItem("historyimage", `${poster}`);
      localStorage.setItem("history", `${path}`);
    }
  };
  return (
    <div
      onClick={showhandler}
      className="flex flex-col drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] justify-center items-center md:mx-20 my-10 h-[30rem] w-[20rem]  md:h-[35rem] md:w-[25rem] bg-gray-800 text-white hover:bg-gray-700"
    >
      <h2 className="flex items-center justify-center text-2xl bg-gray-900 text-center w-[18.8rem] h-[4rem]">
        {movie.Title}
      </h2>
      <div className="drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]">
        <img
          className="border-[3px] md:w-[300px] md:h-[450px] w-[250px] h-[350px] "
          alt={`The movie titled:${movie.Title}`}
          src={poster}
        />
      </div>
      <p>({movie.Year})</p>
    </div>
  );
};

export default Movie;
