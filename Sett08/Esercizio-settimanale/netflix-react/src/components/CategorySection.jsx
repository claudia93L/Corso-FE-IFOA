import { Row, Col, Dropdown } from 'react-bootstrap';

const CategorySection = () => {
  return (
    <>
      <div className='filter-section'>
        <Row className='d-flex align-items-baseline'>
          <div className='col-2'>
            <h1>TV Shows</h1>
          </div>
          <div className='col-1'>
            <Dropdown>
              <Dropdown.Toggle variant='outline-light'>Genres</Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href='#/action-1'>Thriller</Dropdown.Item>
                <Dropdown.Item href='#/action-2'>Fantasy</Dropdown.Item>
                <Dropdown.Item href='#/action-3'>Crime</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className='col-8'></div>
          <div className='col-1 d-flex justify-content-end'>
            <div className='icon squared'>
              <i className='bi bi-text-left'></i>
            </div>
            <div className='icon squared'>
              <i className='bi bi-grid'></i>
            </div>
          </div>
        </Row>
      </div>
    </>
  );
};

export default CategorySection;
