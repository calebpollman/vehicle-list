import React from 'react';
import PropTypes from 'prop-types';
import './ListDetail.css';

const ListDetail = ({vehicle}) => {
  return (
    <div className="list-detail-container">
      <img className="list-detail-image" src={vehicle.image_url} alt="not found" />
      <p className="list-detail-title">{vehicle.title}</p>
      <p className="list-detail-text">Mileage: {vehicle.mileage}</p>
    </div>
  );
}

ListDetail.propTypes = {
  vehicle: PropTypes.object.isRequired,
}

export default ListDetail;