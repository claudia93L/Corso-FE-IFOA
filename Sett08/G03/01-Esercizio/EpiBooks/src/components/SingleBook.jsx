import { Card, Button } from 'react-bootstrap';

const SingleBook = ({ bookSelected }) => {
  return (
    <>
      <Card style={{ width: 300 }}>
        <Card.Header as='h5'>{bookSelected.title} details</Card.Header>
        <Card.Img variant='top' src={bookSelected.img} />
        <Card.Body>
          <Card.Title>{bookSelected.title}</Card.Title>
          <Card.Text className='mb-0'>Asin: {bookSelected.asin}</Card.Text>
          <Card.Text>Prezzo: {bookSelected.price}€</Card.Text>
          <Button variant='primary'>Buy now</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;
