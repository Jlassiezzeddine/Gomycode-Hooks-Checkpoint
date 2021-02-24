import React from "react";

import MovieList from "../MovieList/MovieList";
import "./Content.scss";

const Content = ({ movies, searchTerm }) => {
  return (
    <div className="App-content">
      <div className="container">
        <MovieList movies={movies} searchTerm={searchTerm}></MovieList>
      </div>
    </div>
  );
};

export default Content;
