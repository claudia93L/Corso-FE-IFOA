import { Row } from 'react-bootstrap';
import Gallery from './movies/Gallery';
import CategorySection from './movies/CategorySection';

const Main = ({ setPageTitle }) => {
  const retrievePageTitle = (newPageTitle) => {
    setPageTitle(newPageTitle);
  };

  return (
    <>
      <Row className='mx-4'>
        <CategorySection></CategorySection>
        <Gallery
          retrievePageTitle={retrievePageTitle}
          saga='Harry Potter'
        ></Gallery>
        <Gallery
          retrievePageTitle={retrievePageTitle}
          saga='Avengers'
        ></Gallery>
        <Gallery
          retrievePageTitle={retrievePageTitle}
          saga='Hunger Games'
        ></Gallery>
      </Row>
    </>
  );
};

export default Main;
