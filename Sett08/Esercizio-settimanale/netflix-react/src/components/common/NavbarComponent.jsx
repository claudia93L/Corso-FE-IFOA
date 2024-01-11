import { Nav, Navbar, Container, Dropdown } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg='black' data-bs-theme='dark'>
        <Container className=' d-flex flex-row align-items-center justify-content-start'>
          <Navbar.Brand href='#'>
            <img
              src='../../../src/assets/netflix_logo.png'
              alt='Logo Netflix'
              style={{ width: 120 }}
            />
          </Navbar.Brand>
          <Nav>
            <Nav.Link href='#'>Home</Nav.Link>
            <Nav.Link href='#'>TV Shows</Nav.Link>
            <Nav.Link href='#'>Movies</Nav.Link>
            <Nav.Link href='#'>Recently added</Nav.Link>
            <Nav.Link href='#'>My List</Nav.Link>
          </Nav>
        </Container>
        <Container className='d-flex flex-row align-items-center justify-content-end'>
          <Icon.Search></Icon.Search>

          <a className='mx-3' href='#'>
            KIDS
          </a>
          <Icon.BellFill></Icon.BellFill>
          <Dropdown>
            <Dropdown.Toggle variant='outline'>
              <img
                style={{ width: 30 }}
                src='../../../src/assets/avatar.png'
                alt='Profilo'
              />
            </Dropdown.Toggle>

            <Dropdown.Menu
              align='end'
              title='Dropdown end'
              id='dropdown-menu-align-end'
            >
              <Dropdown.Item className='hover-red-bg' href='#/action-1'>
                Your Profile
              </Dropdown.Item>
              <Dropdown.Item className='hover-red-bg' href='#/action-2'>
                Your Membership
              </Dropdown.Item>
              <Dropdown.Item className='hover-red-bg' href='#/action-3'>
                Sign out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
