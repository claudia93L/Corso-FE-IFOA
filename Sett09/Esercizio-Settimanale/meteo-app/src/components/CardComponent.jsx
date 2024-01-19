import { Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export const CardComponent = ({ city }) => {
  const [cityData, setCityData] = useState(null);
  const [cityForecastData, setCityForecastData] = useState(null);

  const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=';
  const apiKey = '&APPID=1b2c78e3829adfa6630d5a8e796fba86&units=metric';

  const fetchDataToday = async () => {
    try {
      if (city) {
        const resp = await fetch(baseURL + city + apiKey);
        if (resp.ok) {
          const data = await resp.json();
          setCityData(data);
          // console.log(data);
        } else {
          console.error('Error in the HTTP request');
        }
      }
    } catch (error) {
      console.error('Error in the HTTP request:', error);
    }
  };

  const fetchDataForecast = async () => {
    try {
      if (city) {
        const resp = await fetch(forecastURL + city + apiKey);
        if (resp.ok) {
          const data = await resp.json();
          setCityForecastData(data.list);
          // console.log(data);
        } else {
          console.error('Error in the HTTP request');
        }
      }
    } catch (error) {
      console.error('Error in the HTTP request:', error);
    }
  };

  useEffect(() => {
    fetchDataToday();
    fetchDataForecast();
  }, [city]);

  return (
    <div className='d-flex justify-content-center mb-5'>
      {cityData && cityForecastData ? (
        <Card className='text-center my-5 w-50'>
          <Card.Header className='bg-warning'>
            Today's weather in the city of {city}
          </Card.Header>
          <Card.Body className='px-0'>
            {cityData && (
              <>
                <Card.Img
                  src={`./src/assets/${cityData.weather[0].icon}.png`}
                  style={{ width: 150 }}
                  alt={cityData.weather[0].description}
                  className='my-2'
                ></Card.Img>
                <Card.Title className='display-5'>
                  {cityData.name}, {cityData.sys.country}
                </Card.Title>
                <Card.Text>Temperature: {cityData.main.temp}°C</Card.Text>
                <Card.Text>
                  Perceived temperature: {cityData.main.feels_like} °C
                </Card.Text>
                <Card.Text>Weather: {cityData.weather[0].main}</Card.Text>
                <Card.Text>
                  Description: {cityData.weather[0].description}
                </Card.Text>
                <Card.Text>Wind speed: {cityData.wind.speed} km/h</Card.Text>
                <Card.Text>Humidity: {cityData.main.humidity}%</Card.Text>

                {cityForecastData.map((el, i) => {
                  const isEven = i % 2 === 0;
                  const bgClass = isEven ? 'bg-light' : '';

                  return (
                    <div
                      key={el.dt}
                      className={`d-flex flex-row px-3 py-2 justify-content-center ${bgClass}`}
                    >
                      <img
                        src={`./src/assets/${el.weather[0].icon}.png`}
                        alt={el.weather[0].description}
                        style={{ width: 100 }}
                      />
                      <div className='d-flex flex-column text-left mx-5 justify-content-center'>
                        <h5>{el.main.temp}°C</h5>
                        <p>Date: {el.dt_txt}</p>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </Card.Body>
        </Card>
      ) : null}
    </div>
  );
};
