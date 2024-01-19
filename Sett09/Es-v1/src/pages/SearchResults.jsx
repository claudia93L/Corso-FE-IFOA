import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const searchedCity = new URLSearchParams(location.search).get('searchedCity');

  const [search, setSearch] = useState('');
  const [cities, setCities] = useState();

  const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  const apiKey = '&APPID=1b2c78e3829adfa6630d5a8e796fba86';

  const fetchData = async () => {
    try {
      const resp = await fetch(baseURL + searchedCity + apiKey);
      if (resp.ok) {
        const data = await resp.json();
        setCities(data);
        console.log(data);
      } else {
        console.error('Error in the HTTP request');
      }
    } catch (error) {
      console.error('Error in the HTTP request:', error);
    }
  };

  useEffect(() => {
    if (searchedCity?.length > 2) {
      setSearch(searchedCity);
      //console.log(searchedCity);
    }
  }, []);

  useEffect(() => {
    if (search?.length > 2) {
      fetchData();
    }
  }, [search]);
  // QUI HO UN PROBLEMA, L'ARRAY NON é POPOLATO
  return (
    <div className='text-center'>
      <h1>Search results</h1>
      <ul>
        {cities?.length > 0 &&
          cities.map((city) => <li key={city.id}>{city.name}</li>)}
      </ul>
    </div>
  );
};

export default SearchResults;
