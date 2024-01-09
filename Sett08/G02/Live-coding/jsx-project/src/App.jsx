import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Lista from '../src/components/Lista';
import { Button } from 'react-bootstrap';

function App() {
  const giorni = [
    'Lunedì',
    'Martedì',
    'Mercoledì',
    'Giovedì',
    'Venerdì',
    'Sabato',
    'Domenica',
  ];

  return (
    <>
      <Button variant='success'>Ciao</Button>
      <Lista giorni={giorni}></Lista>
    </>
  );
}

export default App;
