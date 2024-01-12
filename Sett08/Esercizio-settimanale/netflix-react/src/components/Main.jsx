import { Row, Spinner, Alert } from 'react-bootstrap';
import Gallery from './movies/Gallery';
import CategorySection from './movies/CategorySection';
import { useState } from 'react';

const Main = () => {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const getSpinner = () => {
    return (
      isLoading && (
        <Spinner animation='border' role='status'>
          <span className='visually-hidden'>Your movies are loading...</span>
        </Spinner>
      )
    );
  };

  const getErrorAlert = () => {
    return (
      isError && (
        <Alert variant='danger'>
          <Alert.Heading>Sorry, there was an unexpected error</Alert.Heading>
          <p>Please, try again</p>
        </Alert>
      )
    );
  };

  return (
    <>
      <Row className='mx-4'>
        <CategorySection></CategorySection>
        {isLoading === true ? getSpinner() : null}
        {isError === true ? getErrorAlert() : null}
        <Gallery
          setLoading={setLoading}
          setError={setError}
          saga='Harry Potter'
        ></Gallery>
        <Gallery
          setLoading={setLoading}
          setError={setError}
          saga='Avengers'
        ></Gallery>
        <Gallery
          setLoading={setLoading}
          setError={setError}
          saga='Dragon Ball'
        ></Gallery>
      </Row>
    </>
  );
};

export default Main;
