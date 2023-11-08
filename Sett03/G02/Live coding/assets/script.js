// da funzione a funzione freccia

// l'occupazione di memoria finisce nel momento in cui l'esecuzione della funzione termina
// la funzione esegue i suoi compiti solo al momento della sua chiamata
function somma(a, b){
    let risultato = a + b;
    return risultato;
  }
  
   // l'occupazione di memoria delle arrow functions persiste per tutto lo script - contesto semantico, esegue i suoi compiti indipendentemente dalla sua chiamata all'avvio dello script, aspetta solo di ricevere i parametri

  // la funzione fa a + b ma non sa dove metterlo
  // si mettono doppie parentesi tonde perchè in questa specifica funzione dobbiamo fare un'operazione e non soltanto ritornare qualcosa
  const somma = ((a, b) => {
    // a + b va tirato fuori dal blocco {}
    return a + b;
  });

  // il return nelle arrow functions è implicito, se le funzioni NON contengono blocchi di codice (le parentesi graffe {})
  const somma = ((a, b) => a + b);

  // con una semplice restituzione di valore, posso anche evitare le parentesi tonde della funzione
  const somma = (a, b) => a + b;
  
  console.log(somma(4, 5));