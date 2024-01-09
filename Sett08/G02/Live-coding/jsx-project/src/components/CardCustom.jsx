import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

function CardCustom(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.giorno}</Card.Title>
        <Button variant='primary'>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardCustom;
