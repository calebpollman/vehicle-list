import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem/ListItem';
import {LoadIcon} from '../Icons/Icons';
import './List.css';

const List = ({listLoading, searchActive, searchResults, vehicles}) => {
  
  const renderVehicles = (vehicles) => {
    return vehicles.map(vehicle => {
      const vehicleTitle = `${vehicle.year} ${vehicle.make} ${vehicle.model}`;
      return (
        <ListItem 
          key={vehicle.id}
          vehicle={vehicle}
          vehicleTitle={vehicleTitle}
        />
      );
    });
  }
  
  listLoading ? 
  vehicles = <LoadIcon /> : searchActive ? 
  vehicles = renderVehicles(searchResults) : vehicles = renderVehicles(vehicles);
  
  return (
    <ul className="list-container">
      {vehicles}
    </ul>
  );
}

List.propTypes = {
  listLoading: PropTypes.bool.isRequired,
  searchActive: PropTypes.bool.isRequired,
  searchResults: PropTypes.array.isRequired,
  vehicles: PropTypes.array.isRequired,
}

export default List;
