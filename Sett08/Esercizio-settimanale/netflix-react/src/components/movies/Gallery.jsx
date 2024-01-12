import { Row, Col, Carousel, Container } from 'react-bootstrap';
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
        const limitedMovies = data.Search; /*.slice(0, 6) */
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

  // riduciamo 6 film in differenti array
  const reduceMovies = (accumulator, currentEl, index) => {
    const groupIndex = Math.floor(index / 6);
    if (!accumulator[groupIndex]) accumulator[groupIndex] = [];
    accumulator[groupIndex].push(currentEl);
    //console.log(accumulator);
    return accumulator;
  };

  return (
    <>
      <div className='saga-section p-0 mt-3'>
        <h2 className='h3'>{saga}</h2>
        <Row xs={2} md={3} lg={6}>
          <Carousel className='w-100 max mb-4 mt-2'>
            {movies.reduce(reduceMovies, []).map((movie, index) => (
              <Carousel.Item key={index}>
                <Container fluid className='d-flex justify-content-center'>
                  {movie.map((singleMovie) => (
                    <Col key={singleMovie.imdbID}>
                      <SingleMovie movie={singleMovie}></SingleMovie>
                    </Col>
                  ))}
                </Container>
              </Carousel.Item>
            ))}
          </Carousel>
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

{
  /* <Row xs={2} md={3} lg={6}>
          {movies.map((movie) => (
            <Col key={movie.imdbID}>
              <SingleMovie movie={movie}></SingleMovie>
            </Col>
          ))}
        </Row>
 */
}
