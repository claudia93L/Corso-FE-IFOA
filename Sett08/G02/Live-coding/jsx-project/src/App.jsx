import './App.css';
import Lista from '../src/components/Lista';

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
      <Lista giorni={giorni}></Lista>
    </>
  );
}

export default App;
