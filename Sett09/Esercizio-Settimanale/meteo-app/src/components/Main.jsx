import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, InputGroup, Form, Container } from 'react-bootstrap';
import { CardComponent } from './CardComponent';

const Main = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/searchresults?search=${search}`);
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
          <Button
            onClick={handleSearch}
            variant='btn btn-primary'
            id='button-addon2'
          >
            Search
          </Button>
        </InputGroup>

        <CardComponent></CardComponent>
      </Container>
    </>
  );
};

export default Main;
