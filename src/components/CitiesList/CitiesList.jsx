import React from 'react';
import PropTypes, { string } from 'prop-types';
import Alert from '../Alert/Alert';
import City from '../City/City';

import './CitiesList.css';

const CitiesList = ({ title, cities }) => {
  const renderedCities = cities.map((city) => (
    <City
      key={`${city.name}-${city.postalCode}`}
      name={city.name}
      postalCode={city.postalCode}
    />
  ));

  const alertText = cities.length > 0
    ? `${cities.length > 1 ? cities.length : 'Une'} ville${
      cities.length > 1 ? 's' : ''
    } correspondant au texte saisi`
    : 'Aucune ville correspondant au texte saisi';
  const alertType = cities.length > 0 ? 'success' : 'danger';

  return (
    <div className="cities-list">
      <h3 className="cities-list__title">{title}</h3>
      <Alert text={alertText} type={alertType} />
      {renderedCities}
    </div>
  );
};

CitiesList.propTypes = {
  title: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(
    PropTypes.shape({ name: string, postalCode: string, category: string }),
  ).isRequired,
};

export default CitiesList;
