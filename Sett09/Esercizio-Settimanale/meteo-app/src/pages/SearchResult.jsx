import { CardComponent } from '../components/CardComponent';
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const SearchResult = () => {
  const location = useLocation();
  const searchedCity = new URLSearchParams(location.search).get('searchedCity');

  const [search, setSearch] = useState('');
  const [cities, setCityData] = useState([]);

  const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  const apiKey = '&APPID=1b2c78e3829adfa6630d5a8e796fba86';

  console.log(searchedCity);

  const fetchData = async () => {
    try {
      const resp = await fetch(baseURL + searchedCity + apiKey);
      if (resp.ok) {
        const data = await resp.json();
        setCityData(data);
        //console.log('interno alla fetch di search result ' + data);
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

  return (
    <>
      <CardComponent city={searchedCity}></CardComponent>
    </>
  );
};

export default SearchResult;
