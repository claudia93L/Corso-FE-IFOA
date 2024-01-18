import { Card, Button } from 'react-bootstrap';

export const CardComponent = () => {
  return (
    <>
      <Card className='text-center my-5'>
        <Card.Header className='bg-warning'>Today's weather</Card.Header>
        <Card.Body>
          <Card.Title>Nome della città</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
