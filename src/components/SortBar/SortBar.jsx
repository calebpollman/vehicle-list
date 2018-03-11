import React from 'react';
import PropTypes from 'prop-types';
import SortButton from '../SortButton/SortButton';
import './SortBar.css';

const SortBar = ({sortSelection, sortOptions, updateSortSelection}) => {
  sortOptions = sortOptions.map(sortOption => {
    return (
      <SortButton 
        key={sortOption}
        isActive={sortOption.toLowerCase() === sortSelection ? true : false}
        sortOption={sortOption}
        updateSortSelection={updateSortSelection}
      />
    );
  });

  return (
    <div className="sort-bar-container">
      <label className="sort-bar-text">Sort Vehicles By:</label>
      {sortOptions}
    </div>
  );
}

SortBar.propTypes = {
  sortSelection: PropTypes.string.isRequired,
  sortOptions: PropTypes.array.isRequired,
  updateSortSelection: PropTypes.func, 
}

export default SortBar;

