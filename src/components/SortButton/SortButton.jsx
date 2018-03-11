import React from 'react';
import PropTypes from 'prop-types';
import './SortButton.css';

const SortButton = ({isActive, sortOption, updateSortSelection}) => {
  let sortClass = 'sort-button';
  if (isActive) sortClass = `${sortClass} ${sortClass}-active`;
  
  return (
    <button 
      className={sortClass}
      onClick={event => updateSortSelection(event, sortOption.toLowerCase())}
    >
      {sortOption}
    </button>
  );
}

SortButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  sortOption: PropTypes.string.isRequired,
  updateSortSelection: PropTypes.func,
}

export default SortButton;