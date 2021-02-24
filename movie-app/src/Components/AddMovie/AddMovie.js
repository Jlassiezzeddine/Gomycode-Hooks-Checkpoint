import "./AddMovie.scss";

import React from "react";

const AddMovie = ({ handleClick, changeValues, addItem }) => {
  const handleSubmit = (e) => {
    changeValues(
      e.target.title.value,
      e.target.posterUrl.value,
      e.target.description.value,
      e.target.rate.value
    );
    addItem();
    handleClick();
    e.preventDefault();
  };
  return (
    <div className="add--movie--wrapper">
      <div className="add--movie--card">
        <div className="add--movie--card--top">
          <h2 className="add--movie--card--title">Add Movie</h2>
          <div className="add--movie--card--close" onClick={handleClick}>
            <i className="fas fa-times"></i>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form--input">
            <label htmlFor="title">Title :</label>
            <input type="text" name="title" id="title" />
          </div>
          <div className="form--input">
            <label htmlFor="posterUrl">Poster Url :</label>
            <input type="text" name="posterUrl" id="posterUrl" />
          </div>
          <div className="form--input">
            <label htmlFor="description">Description :</label>
            <textarea type="text" name="description" id="description" />
          </div>
          <div className="form--input">
            <label htmlFor="rate">Rate :</label>
            <input type="text" name="rate" id="rate" />
          </div>
          <input type="submit" value="Add Movie" />
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
