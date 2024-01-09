import { Button, Card } from 'react-bootstrap';
import { useState } from 'react';
import BooksList from './BooksList';

const AllTheBooks = () => {
  const [bookList, setList] = useState([]);

  return (
    <>
      <BooksList setList={setList}></BooksList>

      <div className='d-flex justify-content-between flex-wrap'>
        {bookList.map((book) => (
          <Card style={{ width: '18rem' }} key={book.asin} className='mb-3'>
            <Card.Img variant='top' src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>{book.asin + ' - ' + book.price}</Card.Text>
              <Button variant='primary'>Buy now</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default AllTheBooks;
