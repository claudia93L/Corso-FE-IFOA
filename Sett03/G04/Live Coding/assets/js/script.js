// 1. Dobbiamo capire in che mese siamo, per scriverlo nell'h1, e quanti giorni ha il mese, per generare il corretto numero di celle

const now = new Date();

/* 2. Per salvare gli appuntamenti, abbiamo bisogno di un'array, perchè ogni appuntamento è una stringa, ogni giorno può contenere infiniti appuntamenti e ogni mese ha un numero di giorni variabile. Creeremo quindi un array di array, dove l'array genitore è il mese e gli array figli rappresentano i giorni

[ rappresenta il mese
    [rappresenta il primo giorno e conterrà i vari appuntamenti - '09:00 -live coding', '14:00 - esercizio'], [rappresenta il secondo giorno],....
]

Non sapendo quanti giorni ci sono nel mese in corso, si crea il "guscio" del mese

*/

const appointments = [];

// Dentro appointments pushiamo tanti sottoarray quanti sono i giorni del mese corrente

const monthNames = [
  'Gennaio',
  'Febbraio',
  'Marzo',
  'Aprile',
  'Maggio',
  'Giugno',
  'Luglio',
  'Agosto',
  'Settembre',
  'Ottobre',
  'Novembre',
  'Dicembre',
];

const scriviMese = function () {
  const title = document.querySelector('h1');
  const indiceMese = now.getMonth(); // 10 perchè siamo a novembre
  const nomeMese = monthNames[indiceMese]; // novembre
  title.innerText = nomeMese;
};

scriviMese();
