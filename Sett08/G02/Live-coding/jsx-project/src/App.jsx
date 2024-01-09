import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Lista from './components/Lista';
import CardCustom from './components/CardCustom';

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
      {giorni.map((giorno, index) => (
        <CardCustom giorno={giorno} jey={index}></CardCustom>
      ))}
      <Lista giorni={giorni}></Lista>
    </>
  );
}

export default App;
