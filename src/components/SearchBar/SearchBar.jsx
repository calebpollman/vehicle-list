import React from 'react';
import SearchIcon from '../Icons/SearchIcon';
import './SearchBar.css';

const SearchBar = ({searchActive, updateSearchTerm}) => {
  return (
    <div className="search-bar-container">
      <input
        className="search-bar-input"
        onChange={event => updateSearchTerm(event)}
        placeholder="Search Make, Model, Year"
      />
      <SearchIcon />
    </div>
  );
}

export default SearchBar;