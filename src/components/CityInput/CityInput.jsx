/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './CityInput.css';

const CityInput = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleSearchChange = ({ target }) => {
    setSearch(target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onSubmit(search);
  };

  return (
    <form className="city-input" onSubmit={handleOnSubmit}>
      <label className="city-input__label" htmlFor="search">
        Je recherche...
      </label>
      <input
        id="search"
        type="text"
        name="search"
        className="city-input__input"
        placeholder="...une ville, un code postal"
        value={search}
        onChange={handleSearchChange}
      />
    </form>
  );
};

CityInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CityInput;
