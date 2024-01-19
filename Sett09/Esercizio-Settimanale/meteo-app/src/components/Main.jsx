import { useState } from 'react';
import { Button, InputGroup, Form, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const [search, setSearch] = useState('');
  const [cityData, setCityData] = useState(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    setCityData(search);
    if (search) {
      navigate(`/searchresults?searchedCity=${search}`);
    }
  };

  return (
    <>
      <Container fluid className='d-flex justify-content-center flex-column'>
        <div className='text-center my-5'>
          <h1>How is the weather today?</h1>
          <p>Search for it down below to discover it</p>
        </div>
        <InputGroup className='mb-3 w-50 mx-auto'>
          <Form.Control
            placeholder='Search for a city...'
            type='text'
            name='search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button onClick={handleSearch} variant='btn btn-primary'>
            Search
          </Button>
        </InputGroup>
      </Container>
    </>
  );
};

export default Main;
