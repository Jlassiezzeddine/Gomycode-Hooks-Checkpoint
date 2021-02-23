import "./MovieList.scss";

import React from "react";

import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div className="row movie--list--wrapper">
      {movies.map((movieItem, index) => (
        <MovieCard id={index} movie={movieItem} />
      ))}
    </div>
  );
};

export default MovieList;
