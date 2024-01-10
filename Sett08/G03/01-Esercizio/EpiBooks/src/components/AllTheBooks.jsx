import { Button, Card } from 'react-bootstrap';
import { useState } from 'react';
import BooksList from './BooksList';
import SingleBook from './SingleBook';

const AllTheBooks = () => {
  const [bookList, setList] = useState([]);

  const [bookId, setBook] = useState(null);

  const bookSelected = (bookId) => {
    const selected = bookList.find((book) => book.asin === bookId);
    setBook(selected);
  };

  if (bookId) {
    return <SingleBook bookSelected={bookId}></SingleBook>;
  } else {
    return (
      <>
        <BooksList setList={setList}></BooksList>

        <div className='d-flex justify-content-between flex-wrap'>
          {bookList.map((book) => (
            <Card
              style={{ width: '18rem' }}
              key={book.asin}
              className='mb-4 mx-2'
            >
              <Card.Img variant='top' src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text className='mb-0'>Asin: {book.asin}</Card.Text>
                <Card.Text>Prezzo: {book.price}€</Card.Text>
                <Button
                  variant='primary'
                  onClick={() => bookSelected(book.asin)}
                >
                  View book
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </>
    );
  }
};

export default AllTheBooks;
