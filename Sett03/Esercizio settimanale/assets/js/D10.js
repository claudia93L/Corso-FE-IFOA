/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log('Esercizio A');

const a = 10;
const b = 20;

const sum = a + b;

console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

console.log('Esercizio B');

const random = Math.floor(Math.random() * 21);

console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

console.log('Esercizio C');

const me = {
  name: 'Claudia',
  surname: 'Lai',
  age: 29,
};

console.log(me.name);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

console.log('Esercizio D');

delete me.age;

console.log(me.age);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

console.log('Esercizio E');

me.skills = ['Java SE', 'Spring Boot', 'JavaScript'];

console.log(me.skills);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

console.log('Esercizio F');

me.skills.push('SQL');

console.log(me.skills);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

console.log('Esercizio G');

me.skills.pop();

console.log(me.skills);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

console.log('Esercizio 1');

const dice = () => Math.ceil(Math.random() * 6);

console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

console.log('Esercizio 2');

const whoIsBigger = (num1, num2) => Math.max(num1, num2);

console.log(whoIsBigger(30, 25));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

console.log('Esercizio 3');

const splitMe = (stringa) => stringa.split(' ');

console.log(splitMe('Ciao come stai'));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

console.log('Esercizio 4');

const deleteOne = (stringa, booleano) => {
  if (booleano) {
    rimuoviPrimo = stringa.slice(1);
    return rimuoviPrimo;
  } else {
    rimuoviUltimo = stringa.slice(0, -1);
    return rimuoviUltimo;
  }
};

console.log(deleteOne('Stringa di test', true));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

console.log('Esercizio 5');

const onlyLetters = (stringa) => {
  const stringaFiltrata = stringa
    .split('')
    .filter((el) => isNaN(parseInt(el))) // la funzione isNaN verifica se il risultato di parseInt(el) è NaN
    .join('');

  return stringaFiltrata;
};

console.log(onlyLetters('Sono la stringa 394 di test'));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

console.log('Esercizio 6');

const isThisAnEmail = (email) =>
  email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    ? true
    : false;

console.log(isThisAnEmail('claudia@gmail.com'));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

console.log('Esercizio 7');

const giorni = [
  'Lunedì',
  'Martedì',
  'Mercoledì',
  'Giovedì',
  'Venerdì',
  'Sabato',
  'Domenica',
];

const whatDayIsIt = () => {
  const data = new Date();
  const giorno = giorni[data.getDay()];
  return giorno;
};

console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

console.log('Esercizio 8');

const dadiLanciati = {
  sum: 0,
  values: [],
};

function rollTheDices(numeroLanci) {
  for (let i = 0; i < numeroLanci; i++) {
    dadiLanciati.values.push(dice());
  }

  dadiLanciati.sum = dadiLanciati.values.reduce(
    (somma, numero) => somma + numero
  );

  return dadiLanciati;
}

console.log(rollTheDices(2));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

console.log('Esercizio 9');

const howManyDays = (data) => {
  const oggi = new Date();
  data = new Date(data);

  const differenzaMillisecondi = oggi.getTime() - data.getTime();

  // formula (1000 milliseconds * (60 seconds * 60 minutes) * 24 hours)

  const differenzaGiorni = Math.floor(
    differenzaMillisecondi / (1000 * 3600 * 24)
  );

  return differenzaGiorni;
};

console.log(howManyDays('2023-11-12'));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

console.log('Esercizio 10');

const isTodayMyBirthday = (compleanno) => {
  const oggi = new Date();

  const verificaData = `${oggi.getMonth() + 1}-${oggi.getDate()}`;

  if (verificaData === compleanno) {
    return true;
  } else {
    return false;
  }
};

console.log(isTodayMyBirthday('11-27'));

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
];

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

console.log('Esercizio 11');

const deleteProp = (oggetto, stringa) => {
  delete oggetto.stringa;
  return oggetto;
};

const oggetto = {
  stringa: 'Stringa test',
  material: 'Ferro',
};

console.log(oggetto);

deleteProp(oggetto, (oggetto.stringa = 'Stringa test'));

console.log(oggetto);

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

console.log('Esercizio 12');

let filmRecente = movies[0].Year;

const newestMovie = () => {
  for (let i = 0; i < movies.length; i++) {
    if (filmRecente < movies[i].Year) {
      filmRecente = movies[i];
    }
  }
  return filmRecente;
};

console.log(newestMovie());

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

console.log('Esercizio 13');

const countMovies2 = () => movies.length;
// oppure
const countMovies = () => movies.reduce((totaleFilm) => totaleFilm + 1, 0);

console.log(countMovies());
console.log(countMovies2());

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

console.log('Esercizio 14');

const onlyTheYears = () => movies.map((el) => el.Year);

console.log(onlyTheYears());

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

console.log('Esercizio 15');

const onlyInLastMillennium = () => movies.filter((film) => film.Year < 2000);

console.log(onlyInLastMillennium());

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

console.log('Esercizio 16');

const sumAllTheYears = () =>
  movies.reduce((somma, numero) => (somma += parseInt(numero.Year)), 0);

console.log(sumAllTheYears());

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

console.log('Esercizio 17');

const searchByTitle = (titoloDaCercare) =>
  movies.filter((el) => {
    if (el.Title.toLowerCase().includes(titoloDaCercare)) {
      return el;
    }
  });

console.log(searchByTitle('avengers'));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

console.log('Esercizio 18');

const filmSmistati = {
  match: [],
  unmatch: [],
};

const searchAndDivide = (stringa) =>
  movies.filter((el) => {
    if (el.Title.toLowerCase().includes(stringa)) {
      filmSmistati.match.push(el);
    } else {
      filmSmistati.unmatch.push(el);
    }

    return filmSmistati;
  });

searchAndDivide('lord');

console.log(filmSmistati.match);
console.log(filmSmistati.unmatch);

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

console.log('Esercizio 19');

const removeIndex = (indiceFilm) => movies.splice(indiceFilm, 1);

removeIndex(13);
console.log(movies);

// oppure

const removeIndex2 = (indiceFilm) =>
  movies.filter((el, index) => index !== indiceFilm);

console.log(removeIndex2(13));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

const divContainer = document.getElementById('container');

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

const td = document.querySelectorAll('td');

td.forEach((td) => (td.innerText = 'Test del querySelectorAll'));

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

console.log('Esercizio 22');

const stampaTd = () => td.forEach((td) => console.log(td.innerText));

stampaTd();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const link = document.querySelectorAll('a');

link.forEach((a) => (a.style.backgroundColor = 'red'));

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

const ul = document.querySelector('#myList');
const li = document.createElement('li');

ul.appendChild(li).innerText = 'Sono una lista generata da JS';

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

ul.removeChild(li);

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const tr = document.querySelectorAll('tr');

const addClassTest = () => tr.forEach((el) => el.classList.add('test'));

addClassTest();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

console.log('Esercizio 27');

function halfTree(numeroRighe) {
  let asterisco = '*';
  for (let i = 0; i < numeroRighe; i++) {
    let rigaAsterisco = '';
    for (let j = 0; j <= i; j++) {
      rigaAsterisco += asterisco;
    }
    console.log(rigaAsterisco);
  }
}

halfTree(3);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

console.log('Esercizio 28');

// soluzione trovata ma non svolta da me - riadattata

const tree = (numeroRighe) => {
  for (let i = 0; i <= numeroRighe; i++) {
    let asterisco = '*';
    let spazio = ' ';
    let riga = '';
    for (let j = i; j < numeroRighe; j++) {
      riga += spazio;
    }
    for (let k = 0; k < i * 2 - 1; k++) {
      riga += asterisco;
    }
    console.log(riga);
  }
};

tree(3);

/* ESERCIZIO 29
Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

console.log('Esercizio 29');

const isItPrime = (numero) => {
  if (numero > 2) {
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      } else {
        return true;
      }
    }
  } else if (numero === 2) {
    return true;
  } else {
    return false;
  }
};

console.log(isItPrime(4));
