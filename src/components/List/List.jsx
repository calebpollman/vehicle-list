import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem/ListItem';
import {LoadIcon} from '../Icons/Icons';
import './List.css';

const List = ({searchActive, searchResults, vehicles}) => {

  if (vehicles.length === 0) {
    vehicles = <LoadIcon />;
  } else {
    vehicles = vehicles.map(vehicle => {
      return (
        <ListItem 
          key={vehicle.id}
          vehicle={vehicle}
        />
      );
    });
  }
  
  return (
    <ul className="list-container">
      <LoadIcon />
    </ul>
  );
}

List.propTypes = {
  searchActive: PropTypes.bool.isRequired,
  searchResults: PropTypes.array.isRequired,
  vehicles: PropTypes.array.isRequired,
}

export default List;

