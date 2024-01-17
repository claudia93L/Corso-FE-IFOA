import { Alert } from 'react-bootstrap';

const AlertError = () => {
  return (
    <>
      <Alert variant='danger'>
        <Alert.Heading>Sorry, there was an unexpected error</Alert.Heading>
        <p>Please, try again now!</p>
      </Alert>
    </>
  );
};

export default AlertError;
