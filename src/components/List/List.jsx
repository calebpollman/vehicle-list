import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem/ListItem';
import './List.css';

const List = ({searchActive, searchResults, vehicles}) => {

  if (vehicles.length === 0) {
    vehicles = <p>LOADING</p>;
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
      {vehicles}
    </ul>
  );
}

List.propTypes = {
  searchActive: PropTypes.bool.isRequired,
  searchResults: PropTypes.array.isRequired,
  vehicles: PropTypes.array.isRequired,
}

export default List;

