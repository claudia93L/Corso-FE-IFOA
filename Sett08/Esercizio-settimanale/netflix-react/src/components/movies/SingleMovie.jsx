import { Card } from 'react-bootstrap';

const SingleMovie = ({ movie }) => {
  return (
    <>
      <Card style={{ width: '18rem' }} href='#'>
        <Card.Img src='{movie.poster}' alt='{movie.title} poster'></Card.Img>
      </Card>
    </>
  );
};

export default SingleMovie;
