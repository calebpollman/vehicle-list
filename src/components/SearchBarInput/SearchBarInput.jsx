import React from 'react';
import PropTypes from 'prop-types';
import './SearchBarInput.css';

const SearchBarInput = ({updateSearchTerm}) => {
  return (
    <input
      autoFocus
      className="search-bar-input"
      onChange={event => updateSearchTerm(event)}
      placeholder="Search Make, Model, Year"
    />
  );
}

SearchBarInput.propTypes = {
  updateSearchTerm: PropTypes.func.isRequired,
}

export default SearchBarInput;