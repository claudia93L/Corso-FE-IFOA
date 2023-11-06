/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish'];

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

console.log(pets.sort());

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log(pets.reverse());

// correzione docente
for (let i = pets.length - 1; i >= 0; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

// faccio push per inserire l'elemento in ultima posizione dell'array
// tra parentesi indico come elemento da prendere, di prelevare il primo elemento dell'array usando shift

pets.push(pets.shift());

console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
];

const licensePlates = ['UGFO37', 'IUS326', 'DUG126'];

for (let i = 0; i < cars.length; i++) {
  if (i < licensePlates.length) {
    cars[i].licensePlate = licensePlates[i];
  } else {
    console.log(
      'Non ci sono più targhe disponibili, verrà inserito un valore di default'
    );
    cars[i].licensePlate = 'default';
  }
}

console.log(
  cars[0].licensePlate + ' ' + cars[1].licensePlate + ' ' + cars[2].licensePlate
);

// correzione docente
for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = 'GG34' + i + 'YZ';
}

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

cars.push({
  brand: 'Fiat',
  model: 'Panda',
  color: 'yellow',
  trims: ['iron', 'style'],
});

for (let i = 0; i < cars.length; i++) {
  if (cars[i].trims !== undefined) {
    cars[i].trims.pop();
  }
}

console.log(
  'macchina 1 ' +
    cars[0].trims +
    ' macchina 2 ' +
    cars[1].trims +
    ' macchina 3 ' +
    cars[2].trims +
    ' macchina 4 ' +
    cars[3].trims
);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

for (let i = 0; i < cars.length; i++) {
  if (cars[i].trims !== undefined) {
    justTrims.push(cars[i].trims[0]);
  }
}

console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.charAt(0) === 'b') {
    console.log('Fizz');
  } else {
    console.log('Bizz');
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

let i = 0;
while (numericArray[i] !== 32) {
  console.log(numericArray[i]);
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd'];
const alfabetoItaliano = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'z',
];

const posizioniAlfabeto = [];

for (let i = 0; i < charactersArray.length; i++) {
  let lettera = charactersArray[i];
  let stringaJS = posizioniAlfabeto.push(alfabetoItaliano.indexOf(lettera));
  switch (lettera) {
    case 'a':
      lettera = 'a';
      stringaJS;
      break;
    case 'b':
      lettera = 'b';
      stringaJS;
      break;
    case 'c':
      lettera = 'c';
      stringaJS;
      break;
    case 'd':
      lettera = 'd';
      stringaJS;
      break;
    case 'e':
      lettera = 'e';
      stringaJS;
      break;
    case 'f':
      lettera = 'f';
      stringaJS;
      break;
    case 'g':
      lettera = 'g';
      stringaJS;
      break;
    case 'h':
      lettera = 'h';
      stringaJS;
      break;
    case 'i':
      lettera = 'i';
      stringaJS;
      break;
    case 'l':
      lettera = 'l';
      stringaJS;
      break;
    case 'm':
      lettera = 'm';
      stringaJS;
      break;
    case 'n':
      lettera = 'n';
      stringaJS;
      break;
    case 'o':
      lettera = 'o';
      stringaJS;
      break;
    case 'p':
      lettera = 'p';
      stringaJS;
      break;
    case 'q':
      lettera = 'q';
      stringaJS;
      break;
    case 'r':
      lettera = 'r';
      stringaJS;
      break;
    case 's':
      lettera = 's';
      stringaJS;
      break;
    case 't':
      lettera = 't';
      stringaJS;
      break;
    case 'u':
      lettera = 'u';
      stringaJS;
      break;
    case 'v':
      lettera = 'v';
      stringaJS;
      break;
    case 'z':
      lettera = 'z';
      stringaJS;
      break;
  }
}

console.log(posizioniAlfabeto);
