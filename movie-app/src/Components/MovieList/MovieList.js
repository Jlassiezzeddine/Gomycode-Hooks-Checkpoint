import "./MovieList.scss";

import React from "react";

import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({ movies, searchTerm }) => {
  return (
    <div className="row movie--list--wrapper">
      {movies
        .filter((item) => item.title.includes(searchTerm))
        .map((movieItem, index) => (
          <MovieCard key={index} movie={movieItem} />
        ))}
    </div>
  );
};

export default MovieList;
