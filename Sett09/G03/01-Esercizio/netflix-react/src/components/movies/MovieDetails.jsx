import { Card } from 'react-bootstrap';
import CategorySection from './CategorySection';

const MovieDetails = ({ movie }) => {
  return (
    <div>
      <CategorySection></CategorySection>
      <Card
        href='#'
        className='cursor-pointer bg-black'
        style={{ width: 200, height: 280 }}
      >
        <Card.Img
          src={movie.Poster}
          alt={movie.Title}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        ></Card.Img>
      </Card>
    </div>
  );
};

export default MovieDetails;
