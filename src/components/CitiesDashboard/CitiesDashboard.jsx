import axios from 'axios';
import React, { useState, useEffect } from 'react';

import CitiesList from '../CitiesList/CitiesList';
import CityInput from '../CityInput/CityInput';

import './CitiesDashboard.css';

const baseURL = process.env.NODE_ENV === 'production'
  ? process.env.REACT_APP_BASE_URL
  : 'http://localhost:5000/cities';

const CitiesDashboard = () => {
  const [cities, setCities] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios({
      url: `${baseURL}?search=${search}`,
    })
      .then((response) => response.data)
      .then((data) => {
        setCities(data);
      });
  }, [search]);

  const handleInputSubmit = (text) => {
    setSearch(text);
  };

  const getCitiesByCategory = (category) => cities.filter((city) => city.category === category);

  return (
    <div className="cities-dashboard">
      <CityInput onSubmit={handleInputSubmit} />
      <CitiesList
        cities={getCitiesByCategory('METROPOLE')}
        title="Villes de métropole"
      />
      <CitiesList
        cities={getCitiesByCategory('OUTRE_MER')}
        title="Villes d'outre-mer"
      />
    </div>
  );
};

export default CitiesDashboard;
