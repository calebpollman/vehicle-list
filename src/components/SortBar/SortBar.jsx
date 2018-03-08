import React from 'react';
import PropTypes from 'prop-types';
import SortButton from '../SortButton/SortButton';

const SortBar = ({sortSelection, sortOptions, updateSortSelection}) => {
  sortOptions = sortOptions.map(sortOption => {
    return (
      <SortButton 
        key={sortOption} 
        isActive={sortOption === sortSelection ? true : false}
        sortOption={sortOption}
        updateSortSelection={updateSortSelection}
      />
    );
  });

  return (
    <div className="list-header-container">
      <p>Sort By:</p>
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

