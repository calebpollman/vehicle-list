import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({vehicle}) => <li className="list-item-container" />;

ListItem.propTypes = {
  vehicle: PropTypes.object.isRequired,
}

export default ListItem;