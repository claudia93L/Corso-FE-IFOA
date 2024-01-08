import { useState } from 'react'; // necessario per la gestione degli stati, in questo caso del contatore
import { useEffect } from 'react';

// creazione di un componente tramite sintassi di funzione
// specifico che questo componente riceverà dei dati -> props
// specifico che riceverà la callback function changePageTitle
const Button = (props, changePageTitle) => {
  // inizializziamo gli hooks che utilizzeremo nei component funzione per gestire lo stato di un compoenete
  // count è il primo parametro (variabile), setCount è il secondo parametro (funzione)
  // useState(0) inizializza lo stato a zero, è opzionale inserire un valore di partenza
  const [count, setCount] = useState(props.count);

  // la funzione triggera la callback function che si trova su App.jsx, passata a button.jsx con i props
  const sendTitle = () => {
    props.changePageTitle('Titolo da callback');
  };

  let newTitle = 'React Base App';

  // useEffect senza dipendenze = triggerato al primo render del componente
  useEffect(() => {
    sendTitle();
  }, []);

  const stileButton = {
    border: '2px solid red',
  }; 

  return (
    <button style={stileButton} onClick={() => setCount((count) => count + 1)}>
      Il conteggio è {count}
    </button>
  );
};

export default Button;
