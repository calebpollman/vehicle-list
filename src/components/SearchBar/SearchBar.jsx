import React from 'react';
import PropTypes from 'prop-types';
import SearchBarInput from '../SearchBarInput/SearchBarInput';
import {CloseIcon, SearchIcon} from '../Icons/Icons';
import './SearchBar.css';

const SearchBar = ({searchActive, toggleSearchActive, updateSearchTerm}) => {
  
  let input;
  if (searchActive) input = <SearchBarInput updateSearchTerm={updateSearchTerm} />;

  return (
    <div className="search-bar-container">
      {input}  
      <div 
        className="search-bar-icon-container"
        onClick={event => {toggleSearchActive(event)}}
      >
        {searchActive ? <CloseIcon /> : <SearchIcon />}
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  searchActive: PropTypes.bool.isRequired, 
  toggleSearchActive: PropTypes.func, 
  updateSearchTerm: PropTypes.func,
}
export default SearchBar;