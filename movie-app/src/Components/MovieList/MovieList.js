import "./MovieList.scss";

import React from "react";

import MovieCard from "../MovieCard/MovieCard";

const MovieList = ({ movies, searchTerm, filterValue }) => {
  console.log(typeof filterValue);
  return (
    <div className="row movie--list--wrapper">
      {movies
        .filter((item) => item.title.includes(searchTerm))
        .filter((item) => item.rate <= filterValue)
        .map((movieItem, index) => (
          <MovieCard key={index} movie={movieItem} />
        ))}
    </div>
  );
};

export default MovieList;
