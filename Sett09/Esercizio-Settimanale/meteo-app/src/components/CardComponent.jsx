import { Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export const CardComponent = ({ city }) => {
  const [cityData, setCityData] = useState(null);

  const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  const apiKey = '&APPID=1b2c78e3829adfa6630d5a8e796fba86';

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (city) {
          const resp = await fetch(baseURL + city + apiKey);
          if (resp.ok) {
            const data = await resp.json();
            setCityData(data);
            console.log(data);
          } else {
            console.error('Error in the HTTP request');
          }
        }
      } catch (error) {
        console.error('Error in the HTTP request:', error);
      }
    };

    fetchData();
  }, [city]);

  return (
    <>
      {cityData ? (
        <Card className='text-center my-5'>
          <Card.Header className='bg-warning'>
            Today's weather in the city of {city}
          </Card.Header>
          <Card.Body>
            {cityData && (
              <>
                {/* <Card.Img src={cityData.weather[0].icon}></Card.Img> */}
                <Card.Title>
                  {cityData.name}, {cityData.sys.country}
                </Card.Title>
                <Card.Text>Temperature: {cityData.main.temp}°K</Card.Text>
                <Card.Text>Weather: {cityData.weather[0].main}</Card.Text>
                <Card.Text>
                  Description: {cityData.weather[0].description}
                </Card.Text>
                <Card.Text>Wind speed: {cityData.wind.speed}</Card.Text>
              </>
            )}
          </Card.Body>
        </Card>
      ) : null}
    </>
  );
};
