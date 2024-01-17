import { Row } from 'react-bootstrap';
import Gallery from './movies/Gallery';
import CategorySection from './movies/CategorySection';
import { useState } from 'react';
import SpinnerLoading from './common/SpinnerLoading';
import AlertError from './common/AlertError';

const Main = () => {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const getSpinner = () => {
    return isLoading && <SpinnerLoading></SpinnerLoading>;
  };

  const getErrorAlert = () => {
    return isError && <AlertError></AlertError>;
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
