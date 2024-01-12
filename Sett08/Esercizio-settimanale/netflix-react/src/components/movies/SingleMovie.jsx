import { Card } from 'react-bootstrap';

const SingleMovie = ({ movie }) => {
  return (
    <div>
      <Card href='#' className='cursor-pointer'>
        <Card.Img src={movie.Poster} alt={movie.Title}></Card.Img>
      </Card>
    </div>
  );
};

export default SingleMovie;
