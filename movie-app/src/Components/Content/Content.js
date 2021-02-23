import React from "react";

import MovieList from "../MovieList/MovieList";
import "./Content.scss";

const Content = ({ movies }) => {
  return (
    <div className="App-content">
      <div className="container">
        <MovieList movies={movies}></MovieList>
      </div>
    </div>
  );
};

export default Content;
