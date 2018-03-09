import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const ListItem = ({vehicle}) => {
  return (
    <li className="list-item-container">
      <Link to={`/${vehicle.id}`}>
        {vehicle.title}
      </Link>
    </li>
  );
}

ListItem.propTypes = {
  vehicle: PropTypes.object.isRequired,
}

export default ListItem;