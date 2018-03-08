import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem/ListItem';

const List = ({vehicles}) => {
  vehicles = vehicles.map(vehicle => {
    return (
      <ListItem 
        key={vehicle.id}
        vehicle={vehicle}
      />
    );
  });

  return (
    <ul className="list-container">
      {vehicles}
    </ul>
  );
}

List.propTypes = {
  vehicles: PropTypes.array.isRequired,
}

export default List;
