import { Button, Row, Col, Container } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <>
      <footer className='mt-5 bg-black' style={{ width: 800 }}>
        <div className='footer-content d-flex py-3 flex-column'>
          <Container fluid>
            <Row>
              <div className='social-media-section'>
                <a href='#'>
                  <Icon.Facebook></Icon.Facebook>
                </a>
                <a href='#'>
                  <Icon.Instagram></Icon.Instagram>
                </a>
                <a href='#'>
                  <Icon.Twitter></Icon.Twitter>
                </a>
                <a href='#'>
                  <Icon.Youtube></Icon.Youtube>
                </a>
              </div>
            </Row>
            <Row>
              <div className='footer-menu col-12 text-left'>
                <Row>
                  <Col lg={3}>
                    <ul className='list-unstyled'>
                      <li>
                        <a href='#'>Audio and Subtitles</a>
                      </li>
                      <li>
                        <a href='#'>Media Center</a>
                      </li>
                      <li>
                        <a href='#'>Privacy</a>
                      </li>
                      <li>
                        <a href='#'>Contact Us</a>
                      </li>
                    </ul>
                  </Col>
                  <Col lg={3}>
                    <ul className='list-unstyled'>
                      <li>
                        <a href='#'>Audio Description</a>
                      </li>
                      <li>
                        <a href='#'>Investor Relations</a>
                      </li>
                      <li>
                        <a href='#'>Legal Notices</a>
                      </li>
                    </ul>
                  </Col>
                  <Col lg={3}>
                    <ul className='list-unstyled'>
                      <li>
                        <a href='#'>Help Center</a>
                      </li>
                      <li>
                        <a href='#'>Jobs</a>
                      </li>
                      <li>
                        <a href='#'>Cookie Preferences</a>
                      </li>
                    </ul>
                  </Col>
                  <Col lg={3}>
                    <ul className='list-unstyled'>
                      <li>
                        <a href='#'>Gift Cards</a>
                      </li>
                      <li>
                        <a href='#'>Terms of Use </a>
                      </li>
                      <li>
                        <a href='#'>Corporate Information</a>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Row>
            <Row>
              <div>
                <Button variant='outline-secondary'>Service Code</Button>
              </div>
            </Row>
            <Row>
              <div>
                <p>&copy; 1997-2019 Netflix, Inc.</p>
              </div>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  );
};

export default Footer;
