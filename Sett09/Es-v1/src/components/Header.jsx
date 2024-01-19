import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar expand='lg' className='navbar-light bg-light mb-5'>
      <Container>
        <Navbar.Brand style={{ width: '10%' }} className='text-center mx-0'>
          <Link to='/'>
            <img
              src='../../src/assets/clouds-logo.png'
              alt='Cloud illustration logo'
              className='w-50'
            />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Link to='/' className='me-3'>
              Homepage
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
