import React from 'react';
import PropTypes from 'prop-types';
import './City.css';

const City = ({ name, postalCode }) => (
  <div className="city">
    <span className="city__name">{name}</span>
    <span className="city__postalCode">{postalCode}</span>
  </div>
);

City.propTypes = {
  name: PropTypes.string.isRequired,
  postalCode: PropTypes.string.isRequired,
};

export default City;
