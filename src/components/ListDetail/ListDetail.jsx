import React from 'react';
import PropTypes from 'prop-types';

const ListDetail = ({vehicle}) => {
  return (
    <div className="list-detail-container">
      {vehicle.title}
    </div>
  );
}

ListDetail.propTypes = {
  vehicle: PropTypes.object.isRequired,
}

export default ListDetail;