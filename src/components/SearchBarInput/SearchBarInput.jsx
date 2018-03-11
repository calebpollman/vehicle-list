import React from 'react';
import PropTypes from 'prop-types';
import './SearchBarInput.css';

const SearchBarInput = ({updateSearchTerm}) => {
  return (
    <div className="search-bar-input-container">
      <input
        autoFocus
        className="search-bar-input"
        onChange={event => updateSearchTerm(event)}
        placeholder="Search Make, Model, Year"
      />
    </div>
  );
}

SearchBarInput.propTypes = {
  updateSearchTerm: PropTypes.func,
}

export default SearchBarInput;