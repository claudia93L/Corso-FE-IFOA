// questo è il concetto di closure, in cui si ha una funzione esterna che contiene un'altrs funzione e la ritorna per potervi accedere. la funzione interna può accedere alle variabili della funzione closure genitore - la struttura in sè è la closure. necessita di autoinvocazione, perchè chiamando la funzione incrementa() normalmente, si limiterebbe ad assegnare la funzione alla const

const incrementa = (function () {
  let counter = 0;

  return function () {
    counter++;
    console.log(counter);
  };
})();

incrementa();
incrementa();
