import { Container, Nav, Navbar } from 'react-bootstrap';

function MyNav() {
  return (
    <Navbar expand='lg' className='navbar-dark bg-dark'>
      <Container>
        <Navbar.Brand href='#home' className='text-white'>
          EpiBooks
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls='basic-navbar-nav'
          className='text-white'
        />
        <Navbar.Collapse id='basic-navbar-nav' className='text-white'>
          <Nav className='me-auto'>
            <Nav.Link href='#' className='text-white'>
              Home
            </Nav.Link>
            <Nav.Link href='#' className='text-white'>
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
