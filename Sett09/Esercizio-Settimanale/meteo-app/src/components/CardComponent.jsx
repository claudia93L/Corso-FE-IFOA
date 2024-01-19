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

  function formatDateTime(timestamp) {
    const fullDate = new Date(timestamp);
    //  padStart -> utilizzata per estendere una stringa aggiungendo caratteri specifici all'inizio della stringa fino a raggiungere una lunghezza target specificata. è utile quando si desidera formattare una stringa per assicurarsi che abbia una certa lunghezza minima e, se necessario, riempirla con caratteri di riempimento
    // utilizzandolo, mi assicuro che se, se l'ora o la data sono di un solo numero, verrà aggiunto lo zero per avere sempre due cifre
    const day = String(fullDate.getDate()).padStart(2, '0');
    const month = String(fullDate.getMonth() + 1).padStart(2, '0');
    const hour = String(fullDate.getHours()).padStart(2, '0');
    const minutes = String(fullDate.getMinutes()).padStart(2, '0');
    return `${day}/${month} - ${hour}:${minutes}`;
  }

  return (
    <div className='d-flex justify-content-center mb-5'>
      {cityData && cityForecastData ? (
        <Card className='text-center mt-1 mb-5 w-50'>
          <Card.Header className='bg-warning'>
            Today's weather in the city of {city}
          </Card.Header>
          <Card.Body className='px-0'>
            {cityData && (
              <>
                <Card.Img
                  src={`./src/assets/weather-icons/${cityData.weather[0].icon}.png`}
                  style={{ width: 150 }}
                  alt={cityData.weather[0].description}
                  className='my-2'
                ></Card.Img>
                <Card.Title className='display-5 mb-4'>
                  {cityData.name}, {cityData.sys.country}
                </Card.Title>
                <Card.Text>
                  Temperature: <b>{cityData.main.temp}°C</b>
                </Card.Text>
                <Card.Text>
                  Perceived temperature: <b>{cityData.main.feels_like} °C</b>
                </Card.Text>
                <Card.Text>
                  Weather: <b>{cityData.weather[0].main}</b>
                </Card.Text>
                <Card.Text>
                  Description: <b>{cityData.weather[0].description}</b>
                </Card.Text>
                <Card.Text>
                  Wind speed: <b>{cityData.wind.speed} km/h</b>
                </Card.Text>
                <Card.Text>
                  Humidity: <b>{cityData.main.humidity}%</b>
                </Card.Text>
                <div className='bg-dark text-light py-3 mb-0'>
                  <h6>Keep scrolling to discover the full forecast</h6>
                </div>

                {cityForecastData.map((el, i) => {
                  const isEven = i % 2 === 0;
                  const bgClass = isEven ? 'bg-light' : '';

                  return (
                    <div
                      key={el.dt}
                      className={`d-flex flex-row px-3 py-2 justify-content-center ${bgClass}`}
                    >
                      <img
                        src={`./src/assets/weather-icons/${el.weather[0].icon}.png`}
                        alt={el.weather[0].description}
                        style={{ width: 100 }}
                      />
                      <div className='d-flex flex-column text-left mx-5 justify-content-center'>
                        <h5>{el.main.temp}°C</h5>
                        <p>Date: {formatDateTime(el.dt_txt)}</p>
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
