// VERIFICA QUALE USARE PER OGNI CASO

const numeriArray = [3, 6, 9, 12, 15];
const arrayStringhe = ['cane', 'gatto', 'elefante', 'topo', 'uccello'];
const arrayOggetti = [
  { nome: 'Alice', eta: 30 },
  { nome: 'Bob', eta: 25 },
  { nome: 'Carol', eta: 35 },
  { nome: 'David', eta: 40 },
  { nome: 'Eve', eta: 28 },
];

// ##################  01   #####################
// Esercizio: Converti una funzione normale in una arrow function.

function somma(a, b) {
  return a + b;
}

// le arrow functions si dichiarano rimuovendo la keyword function, e dichiarando l'arrow function come una variabile. La keyword function viene sostituita dal simbolo della freccia =>
// le parentesi graffe si aprono soltanto se si deve svolgere più di un'istruzione (solitamente più di un return) e non è necessario specificare la parola chiave perchè è già un comportamento implicito dell'arrow function

const somma = (a, b) => a + b;

// Risolvi

// ##################  02   #####################
//Esercizio: Converti una funzione normale in una arrow function e usa un ciclo for per calcolare la somma degli elementi in un array.

function sommaArray(arr) {
  let somma = 0;
  for (let i = 0; i < arr.length; i++) {
    somma += arr[i];
  }
  return somma;
}

const sommaArray = (arr) => {
  let somma = 0;
  for (let i = 0; i < arr.length; i++) {
    somma += arr[i];
  }

  return somma;
};

// ##################  03   #####################
// Esercizio: Converti una funzione normale in una arrow function e usa un ciclo for per trovare i numeri pari in un array di numeri.

function numeriPari(arr) {
  const numeriPari = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      numeriPari.push(arr[i]);
    }
  }
  return numeriPari;
}

const numeriPari = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      numeriPari.push(arr[i]);
    }
  }
  return numeriPari;
};

// ##################  04   #####################
// Esercizio: Converti una funzione normale in una arrow function e usa un ciclo for per trovare le stringhe che contengono una lettera specifica in un array di stringhe.

function trovaStringheConLettera(arr, lettera) {
  const risultato = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(lettera)) {
      risultato.push(arr[i]);
    }
  }
  return risultato;
}

const trovaStringheConLettera = (arr, lettera) => {
  const risultato = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(lettera)) {
      risultato.push(arr[i]);
    }
  }
  return risultato;
};

// ##################  05   #####################
// Esercizio: Converti una funzione normale in una arrow function e usa un ciclo for per trovare gli oggetti che soddisfano una condizione specifica in un array di oggetti, USA ARRAY OGGETTI SOPRA.
function oggettiConCondizione(arr, condizione) {
  const risultato = [];
  for (let i = 0; i < arr.length; i++) {
    if (condizione(arr[i])) {
      risultato.push(arr[i]);
    }
  }
  return risultato;
}

const oggettiConCondizione = (arr, condizione) => {
  const risultato = [];
  for (let i = 0; i < arr.length; i++) {
    if (condizione(arr[i])) {
      risultato.push(arr[i]);
    }
  }
  return risultato;
};

// ##################  06   #####################
// Esercizio: Converti una funzione normale in una arrow function e usa un ciclo for per trovare il valore massimo in un array di numeri.
function valoreMassimo(arr) {
  if (arr.length === 0) return null;

  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

const valoreMassimo = (arr) => {
  if (arr.length === 0) return null;

  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

// ##################  07   #####################
// Esercizio: Converti una funzione normale in una arrow function e usa un ciclo for per trovare la somma delle cifre di un numero.
const numero = 12345;
function sommaCifreNumero(numero) {
  const numeroStringa = numero.toString();
  let somma = 0;
  for (let i = 0; i < numeroStringa.length; i++) {
    somma += parseInt(numeroStringa[i]);
  }
  return somma;
}

const sommaCifreNumero = (numero) => {
  const numeroStringa = numero.toString();
  let somma = 0;
  for (let i = 0; i < numeroStringa.length; i++) {
    somma += parseInt(numeroStringa[i]);
  }
  return somma;
};

// ##################  08   #####################
//Esercizio: Converti una funzione normale in una arrow function e usa un ciclo for per calcolare il fattoriale di un numero intero USA CONSOLE LOG .
function fattoriale(n) {
  if (n < 0) return undefined;
  if (n === 0 || n === 1) return 1;

  let risultato = 1;
  for (let i = 2; i <= n; i++) {
    risultato *= i;
  }
  return risultato;
}

const fattoriale = (n) => {
  if (n < 0) return undefined;
  if (n === 0 || n === 1) return 1;

  let risultato = 1;
  for (let i = 2; i <= n; i++) {
    risultato *= i;
  }
  return risultato;
};

// ##################  09   #####################
//Esercizio: Converti una funzione normale in una arrow function e usa un ciclo for per invertire una stringa.

function inversoStringa(stringa) {
  let risultato = '';
  for (let i = stringa.length - 1; i >= 0; i--) {
    risultato += stringa[i];
  }
  return risultato;
}

const inversoStringa = (stringa) => {
  let risultato = '';
  for (let i = stringa.length - 1; i >= 0; i--) {
    risultato += stringa[i];
  }
  return risultato;
};

// ##################  10   #####################
//Riscrivi la seguente funzione normale come arrow function e utilizza il metodo .map() per creare un nuovo array con la lunghezza di ciascuna stringa in un array di stringhe:
function lunghezzaStringhe(arr) {
  return arr.map(function (str) {
    return str.length;
  });
}

const lunghezzaStringhe = (arr) => arr.map((str) => str.length);

// ##################  11   #####################
//Esercizio: Trasforma una funzione normale in una arrow function e usa il metodo .filter()Riscrivi la seguente funzione normale come arrow function e utilizza il metodo .filter() per trovare le stringhe che contengono una lettera specifica in un array di stringhe:
function trovaStringheConLettera(arr, lettera) {
  return arr.filter(function (str) {
    return str.includes(lettera);
  });
}

const trovaStringheConLettera = (arr, lettera) =>
  arr.filter((str) => str.includes(lettera));

// ##################  12   #####################
//Esercizio 4:Riscrivi la seguente funzione normale come arrow function e utilizza il metodo .reduce() per trovare il valore massimo in un array di numeri:
function valoreMassimo(arr) {
  return arr.reduce(function (max, current) {
    return Math.max(max, current);
  });
}

const valoreMassimo = (arr) =>
  arr.reduce((max, current) => Math.max(max, current));

// ##################  13   #####################
//Esercizio 5: Riscrivi la seguente funzione normale come arrow function e utilizza il metodo .forEach() per calcolare la somma degli elementi in un array:
function sommaArray(arr) {
  let somma = 0;
  arr.forEach(function (element) {
    somma += element;
  });
  return somma;
}

const sommaArray = (arr) => {
  let somma = 0;
  arr.forEach((element) => {
    somma += element;
  });

  return somma;
};
