import { Col } from 'react-bootstrap';
import SingleMovie from './SingleMovie';
import { useState } from 'react';

const Gallery = () => {
  const [movies] = useState();

  return (
    <>
      <div className='saga-section p-0'>
        <h2>Titolo</h2>
      </div>
    </>
  );
};

export default Gallery;
