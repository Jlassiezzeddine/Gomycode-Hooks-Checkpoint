import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";

function App() {
  let movies = [
    {
      title: "movie one title",
      description: "Movie One Description",
      posterUrl:
        "https://images.unsplash.com/photo-1478479405421-ce83c92fb3ba?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1534&q=80",
      rate: 6.7,
    },
    {
      title: "movie two title",
      description: "Movie two Description",
      posterUrl:
        "https://images.unsplash.com/photo-1478479405421-ce83c92fb3ba?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1534&q=80",
      rate: 5.8,
    },
    {
      title: "movie three title",
      description: "Movie two Description",
      posterUrl:
        "https://images.unsplash.com/photo-1478479405421-ce83c92fb3ba?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1534&q=80",
      rate: 5.8,
    },
  ];

  const [movieList, setMovieList] = useState(movies);
  const [searchTerm, setSearechTerm] = useState("");
  const searchMovie = (search) => {
    setSearechTerm(search);
  };
  const addItem = (newmovie) => {
    setMovieList([...movieList, newmovie]);
  };

  return (
    <div className="App">
      <Header addItem={addItem} searchMovie={searchMovie}></Header>

      <Content movies={movieList} searchTerm={searchTerm}></Content>
    </div>
  );
}

export default App;
