import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      <Container fluid className='bg-dark text-white py-3 text-center position-fixed bottom-0'>
        <p >
          <small>Copyright &copy; 2024 | IntoTheClouds Weather App</small>
        </p>
      </Container>
    </>
  );
};

export default Footer;
