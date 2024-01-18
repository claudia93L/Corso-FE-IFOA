import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, InputGroup, Form, Container } from 'react-bootstrap';
import { CardComponent } from './CardComponent';

const Main = () => {
  const [search, setSearch] = useState('');
  const [city, setCity] = useState([]);
  const navigate = useNavigate();

  const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  const apiKey = '&APPID=1b2c78e3829adfa6630d5a8e796fba86';

  useEffect(() => {
    if (search?.length > 2) {
      fetchData();
    }
  }, [search]);

  const handleSearch = () => {
    navigate(`/searchresults?search=${search}`);
  };

  const fetchData = async () => {
    try {
      const resp = await fetch(baseURL + search + apiKey);
      if (resp.ok) {
        const data = await resp.json();
        setCity(data);
        //console.log(data);
      } else {
        console.error('Error in the HTTP request');
      }
    } catch (error) {
      console.error('Error in the HTTP request:', error);
    }
  };

  return (
    <>
      <Container fluid>
        <div className='text-center my-5'>
          <h1>How is the weather today?</h1>
          <p>Search for it or click on your city of interest to discover it</p>
        </div>
        <InputGroup className='mb-3'>
          <Form.Control
            placeholder='Search for a city...'
            type='text'
            name='search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button onClick={handleSearch} variant='btn btn-success'>
            Search
          </Button>
        </InputGroup>
        <div className='d-flex flex-row justify-content-center'>
          <Button variant='btn btn-primary mx-3'>Cagliari</Button>
          <Button variant='btn btn-primary mx-3'>Rome</Button>
          <Button variant='btn btn-primary mx-3'>Barcelona</Button>
          <Button variant='btn btn-primary mx-3'>Tokyo</Button>
          <Button variant='btn btn-primary mx-3'>New York</Button>
          <Button variant='btn btn-primary mx-3'>Paris</Button>
        </div>

        <CardComponent city={city.id}></CardComponent>
      </Container>
    </>
  );
};

export default Main;
