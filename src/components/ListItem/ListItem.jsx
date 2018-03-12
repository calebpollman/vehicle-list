import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './ListItem.css';

const ListItem = ({vehicle, vehicleTitle}) => {
  return (
    <Link to={`/${vehicle.id}`} className="link-container">
      <li className="list-item-container">
        <p className="list-item-title">{vehicleTitle}</p>
        <p className="list-item-text">Mileage: {vehicle.mileage}</p>
      </li>
    </Link>
  );
}

ListItem.propTypes = {
  vehicle: PropTypes.object.isRequired,
  vehicleTitle: PropTypes.string.isRequired,
}

export default ListItem;