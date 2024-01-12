import { Spinner } from 'react-bootstrap';

const SpinnerLoading = () => {
  return (
    <>
      <Spinner animation='border' variant='danger' role='status'>
        <span className='visually-hidden'>Your movies are loading...</span>
      </Spinner>
    </>
  );
};

export default SpinnerLoading;
