import React from 'react';

const SearchBar = ({updateSearchTerm}) => {
  return (
    <div className="searchbar-container">
      <input
        className="searchbar-input"
        onChange={event => updateSearchTerm(event)}
        placeholder="Search Vehicles"
      />
    </div>
  );
}

export default SearchBar;