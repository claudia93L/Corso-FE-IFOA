import { Card } from 'react-bootstrap';

const SingleMovie = ({ movie }) => {
 
  return (
    <div>
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
    </div>
  );
};

export default SingleMovie;
