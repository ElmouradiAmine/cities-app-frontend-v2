import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';

const Alert = ({ text, type }) => (
  <div className={`alert alert--${type}`}>
    {text}
  </div>
);
Alert.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
};

Alert.defaultProps = {
  text: 'This is an alert component',
  type: 'success',
};

export default Alert;
