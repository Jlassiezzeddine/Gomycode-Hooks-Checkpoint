import React, { Component } from "react";

import "./Header.scss";

class Header extends Component {
  render() {
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
            <i class="fas fa-search"></i>
          </div>
          <div className="nav--buttons">
            <button className="filter--button">
              <i class="fas fa-filter"></i>Filter
            </button>
            <button className="add--movie--button">
              <i class="fas fa-plus"></i>Add
            </button>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
