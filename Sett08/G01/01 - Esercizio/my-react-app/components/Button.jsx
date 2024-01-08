import { useState } from 'react'; // necessario per la gestione degli stati, in questo caso del contatore

// creazione di un componente tramite sintassi di funzione
const Button = () => {
  // inizializziamo gli hooks che utilizzeremo nei component funzione per gestire lo stato di un compoenete
  // count è il primo parametro (variabile), setCount è il secondo parametro (funzione)
  // useState(0) inizializza lo stato a zero, è opzionale inserire un valore di partenza
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      Il conteggio è {count}
    </button>
  );
};

export default Button;
