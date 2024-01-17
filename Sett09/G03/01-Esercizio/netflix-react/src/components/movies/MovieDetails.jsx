import { Card } from 'react-bootstrap';
import CategorySection from './CategorySection';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});

  const params = useParams();

  const fetchMovieData = async () => {
    const resp = await fetch(
      `http://www.omdbapi.com/?i=${params.movieId}&apikey=d8685296&`
    );
    const data = await resp.json();
    setMovie(data);
  };

  useEffect(() => {
    fetchMovieData();
  }, []);

  return (
    <div>
      <CategorySection></CategorySection>
      <div className='d-flex flex-row justify-content-center'>
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
        <div className='d-flex flex-column justify-content-center'>
          <h5 className='text-white'>Title: {movie.Title}</h5>
          <h5 className='text-white'>Year: {movie.Year}</h5>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
