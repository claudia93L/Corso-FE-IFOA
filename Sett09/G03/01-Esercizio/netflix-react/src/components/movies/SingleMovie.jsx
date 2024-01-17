import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleMovie = ({ movie }) => {
  return (
    <div>
      <Link>
        <Card
          className='cursor-pointer bg-black'
          style={{ width: 200, height: 280 }}
        >
          <Card.Img
            src={movie.Poster}
            alt={movie.Title}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          ></Card.Img>
        </Card>
      </Link>
    </div>
  );
};

export default SingleMovie;
