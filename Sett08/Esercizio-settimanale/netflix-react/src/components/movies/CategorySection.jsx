import { Row, Col, Dropdown } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import './CategorySection.css';

const CategorySection = () => {
  return (
    <>
      <Row className='d-flex align-items-baseline m-0 p-0'>
        <Col md={1} className='m-0 p-0'>
          <h1 className='h5'>TV Shows</h1>
        </Col>
        <Col md={1} className='m-0 p-0 ps-2'>
          <Dropdown>
            <Dropdown.Toggle variant='outline-light'>Genres</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item className='hover-red-bg' href='#/action-1'>
                Thriller
              </Dropdown.Item>
              <Dropdown.Item className='hover-red-bg' href='#/action-2'>
                Fantasy
              </Dropdown.Item>
              <Dropdown.Item className='hover-red-bg' href='#/action-3'>
                Crime
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col md={9} className='m-0'></Col>
        <Col md={1} className='m-0 d-flex justify-content-end'>
          <Icon.TextLeft className='squared d-md-block d-sm-none'></Icon.TextLeft>
          <Icon.Grid className='squared d-md-block d-sm-none'></Icon.Grid>
        </Col>
      </Row>
    </>
  );
};

export default CategorySection;
