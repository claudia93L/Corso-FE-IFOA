import { Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export const CardComponent = ({ city }) => {
  const [searchedCity, setCity] = useState(city);
  console.log('logga city ' + city);

  const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  const apiKey = '&APPID=1b2c78e3829adfa6630d5a8e796fba86';

/*   const fetchData = async () => {
    try {
      const resp = await fetch(baseURL + city + apiKey);
      if (resp.ok) {
        const data = await resp.json();
        //setCity(data);
        console.log(data);
        console.log('log da card searchedCity ' + searchedCity);

      } else {
        console.error('Error in the HTTP request');
      }
    } catch (error) {
      console.error('Error in the HTTP request:', error);
    }
  };

  useEffect(() => {
    fetchData();
    
  }, []); */


  console.log('log da card city' + city);

  return (
    <>
      <Card className='text-center my-5'>
        <Card.Header className='bg-warning'>
          Today's weather in the city of...
        </Card.Header>
        <Card.Body>
          {/* <Card.Img>{city.weather[0].icon}</Card.Img> */}
          <Card.Title>
            {city.name}, {/* {city.sys.country} */}
          </Card.Title>
          {/* <Card.Text>Temperature: {city.main.temp}°F</Card.Text>
          <Card.Text>Weather: {city.weather[0].main}</Card.Text>
          <Card.Text>Description: {city.weather[0].description}</Card.Text>
          <Card.Text>Wind speed: {city.wind.speed}</Card.Text> */}
        </Card.Body>
      </Card>
    </>
  );
};
