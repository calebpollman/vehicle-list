import React from 'react';
import './SearchBar.css';

const SearchBar = ({updateSearchTerm}) => {
  return (
    <div className="search-bar-container">
      <input
        className="search-bar-input"
        onChange={event => updateSearchTerm(event)}
        placeholder="Search Vehicles"
      />
    </div>
  );
}

export default SearchBar;