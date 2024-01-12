import { Row, Col } from 'react-bootstrap';
import SingleMovie from './SingleMovie';
import { useState, useEffect } from 'react';

const Gallery = ({ saga, setLoading, setError }) => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?s=${saga}&apikey=1a73cf6e`
      );
      if (res.ok) {
        let data = await res.json();
        const limitedMovies = data.Search.slice(0, 6);
        setMovies(limitedMovies);
        //console.log(limitedMovies);
        setLoading(false);
      } else {
        setLoading(false);
        console.log('error');
        setError(true);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(true);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <div className='saga-section p-0'>
        <h2>{saga}</h2>
        <Row xs={2} md={3} lg={6}>
          {movies.map((movie) => (
            <Col key={movie.imdbID}>
              <SingleMovie movie={movie}></SingleMovie>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Gallery;

{
  /* <Carousel>
<Carousel.Item key={movie.imdbID}>
  {movies.map((movie) => (
    
      <SingleMovie movie={movie}></SingleMovie>
    
  ))}
  </Carousel.Item>
</Carousel>;
 */
}
