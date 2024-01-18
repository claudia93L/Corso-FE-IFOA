import { Card } from 'react-bootstrap';

export const CardComponent = ({ city }) => {
  return (
    <>
      <Card className='text-center my-5'>
        <Card.Header className='bg-warning'>Today's weather</Card.Header>
        <Card.Body>
         {/*  <Card.Img>{city.weather.icon}</Card.Img>
          <Card.Title>
            {city.name}, {city.sys.country}
          </Card.Title>
          <Card.Text>Temperature: {city.main.temp}°F</Card.Text>
          <Card.Text>Weather: {city.weather.main}</Card.Text>
          <Card.Text>Description: {city.weather.description}</Card.Text>
          <Card.Text>Wind speed: {city.wind.speed}</Card.Text> */}
        </Card.Body>
      </Card>
    </>
  );
};
