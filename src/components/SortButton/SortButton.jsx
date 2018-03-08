import React from 'react';
import PropTypes from 'prop-types';

const SortButton = ({isActive, sortOption, updateSortSelection}) => {
  return (
    <button 
      className="sort-button"
      onClick={event => updateSortSelection(event, sortOption)}
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