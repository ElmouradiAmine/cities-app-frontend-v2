import axios from 'axios';
import React, { useState, useEffect } from 'react';

import CitiesList from '../CitiesList/CitiesList';
import CityInput from '../CityInput/CityInput';
import Alert from '../Alert/Alert';
import Spinner from '../Spinner/Spinner';

import './CitiesDashboard.css';

const baseURL = process.env.NODE_ENV === 'production'
  ? process.env.REACT_APP_BASE_URL
  : 'http://localhost:5000/cities';

const CitiesDashboard = () => {
  const [cities, setCities] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      url: `${baseURL}?search=${search}`,
    })
      .then((response) => response.data)
      .then((data) => {
        setCities(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }, [search]);

  const handleInputSubmit = (text) => {
    setSearch(text);
  };

  const getCitiesByCategory = (category) => cities.filter((city) => city.category === category);

  const renderContent = () => {
    if (loading) {
      return <Spinner />;
    }
    if (error) {
      return <Alert text="A network error has occured. Please refresh the page or retry later!" type="danger" />;
    }
    return (
      <>
        <CitiesList
          cities={getCitiesByCategory('METROPOLE')}
          title="Villes de métropole"
        />
        <CitiesList
          cities={getCitiesByCategory('OUTRE_MER')}
          title="Villes d'outre-mer"
        />
      </>
    );
  };
  return (
    <div className="cities-dashboard">
      <CityInput onSubmit={handleInputSubmit} />
      {renderContent()}
    </div>
  );
};

export default CitiesDashboard;
