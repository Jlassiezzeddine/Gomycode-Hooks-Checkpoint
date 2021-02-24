import "./App.css";
import React, { useState } from "react";
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
  const [addMovieItem, setAddMovieItem] = useState({
    title: "",
    posterUrl: "",
    description: "",
    rate: "",
  });
  let newMovie = {};
  const changeValues = (title, posterUrl, description, rate) => {
    setAddMovieItem({
      title: title,
      posterUrl: posterUrl,
      description: description,
      rate: rate,
    });

    newMovie = {
      title: title,
      posterUrl: posterUrl,
      description: description,
      rate: rate,
    };
    movies.push(newMovie);
    setMovieList(movies);
    movies = movies;
    console.log(addMovieItem);
  };
  const addItem = () => {};
  return (
    <div className="App">
      <Header changeValues={changeValues} addItem={addItem}></Header>

      <Content movies={movieList}></Content>
    </div>
  );
}

export default App;
