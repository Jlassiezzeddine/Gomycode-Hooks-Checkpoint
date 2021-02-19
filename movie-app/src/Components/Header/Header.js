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
            <input type="text" name="search" id="search" />
          </div>
          <div className="nav--buttons">
            <button className="filter--button">Filter</button>
            <button className="add--movie">Add</button>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
