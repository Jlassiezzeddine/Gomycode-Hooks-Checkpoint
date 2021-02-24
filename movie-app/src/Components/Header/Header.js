import React, { useState } from "react";

import "./Header.scss";

import AddMovie from "../AddMovie/AddMovie";
import Filter from "../Filter/Filter";

const Header = ({ changeValues, addItem }) => {
  const [addMovieDisplay, setAddMovieDisplay] = useState(false);

  const handleClick = () => {
    setAddMovieDisplay(!addMovieDisplay);
  };
  return (
    <div className="App-header">
      <nav>
        <div className="logo">
          <a href="#">Movies</a>
        </div>
        <div className="search--field">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search movie"
          />
          <i className="fas fa-search"></i>
        </div>
        <div className="nav--buttons">
          <button className="filter--button">
            <i className="fas fa-filter"></i>Filter
          </button>
          <button
            className="add--movie--button"
            onClick={() => setAddMovieDisplay(!addMovieDisplay)}
          >
            <i className="fas fa-plus"></i>Add
          </button>
        </div>
      </nav>
      {addMovieDisplay && (
        <AddMovie
          handleClick={handleClick}
          addItem={addItem}
          changeValues={changeValues}
        />
      )}
      <Filter />
    </div>
  );
};

export default Header;
