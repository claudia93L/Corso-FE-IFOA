``

/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/

const myConcat = function (str1, str2) {
  const caratteriStr1 = str1.slice(0, 2);
  // sarebbe stato meglio scrivere str2.length - 3
  const caratteriStr2 = str2.slice(-3);

  let stringaConcatenata = caratteriStr1.concat(caratteriStr2);

  return stringaConcatenata.toUpperCase();
};

console.log(myConcat('Ciao', 'Mondo'));

// versione docente
/* const myConcat = function (str1, str2){
  return str1.slice(0, 2).concat(str2.slice(str2.length - 3));
}

console.log(myConcat('Nicola', 'Anna').toUpperCase()); */

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/

function numeriCasuali(){
  const arrayNumeri = [];
  let numeroCasuale = 0;

  for(let i = 0; i !== 10; i++){
    numeroCasuale = Math.floor(Math.random() * 101);
    arrayNumeri.push(numeroCasuale);
  }

  return arrayNumeri;
}

console.log(numeriCasuali());

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/

// corretto dal docente -> non avevo scritto la funzione
const numeriPari = (array) => {
  return array.filter((numero) => numero % 2 === 0);
}; 

console.log(`Numeri pari dell'array: ${numeriPari(numeriCasuali())}`);

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/

const arrNum = [10, 20, 15, 5];

function sommaArray(arrNum) {
  let somma = 0;

  arrNum.forEach(function(numero) {
    somma += numero;
  });

  return somma;
}
  
console.log(`La somma dei numeri nell'array con il forEach è ${sommaArray(arrNum)}`);

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
let somma = 0;
const sommaNumeri = arrNum.reduce((
somma, numero
) => somma + numero);

console.log(`La somma dei numeri nell'array con il reduce è ${sommaNumeri}`);

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

const arr = [1, 2, 3];
const n = 5;
// [6, 7, 8]

const addN = function (arr, n) {
  
 const arrayNumIncr = arr.map((numero) => numero + n)
  // tornare un nuovo array con ogni valore addizionato con n
  return arrayNumIncr;
};

console.log(`Array con i numeri incrementati di ${5}: ${addN(arr, n)}`);

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

const arrFrutti = ["Mela", "Ciliegia", "Pesca", "Melograno"];

function calcolaLunghezze(arrFrutti){
  const arrayLunghezzeParole = arrFrutti.map((frutto) => frutto.length);

  return arrayLunghezzeParole;
}

console.log(calcolaLunghezze(arrFrutti));

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/

const numeriDispari = [];

function smistaNumeri(numeriDispari){
  for(let i = 0; i < 100; i++){
    if(i % 2 !== 0){
      numeriDispari.push(i);
    }
  }
  return numeriDispari;
}

console.log(smistaNumeri(numeriDispari));

/* const numeriDispari = [];
let numero = 1

function riempiArray(){
  while(numeri.length !== 99){
    numeri.push(numero)
    numero++;
  }

  return numeri;
} 

console.log(riempiArray());
*/

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
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

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
let film = movies[0].Year;

const filmVecchio = movies.forEach(filmX => {
  if(filmX.Year < film){
    film = filmX.Year;
  }
  return filmX;
})

console.log(`Il film più vecchio è datato ${film}`);


// versione del docente -> utilizza il parseInt()

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/

function totaleFilm() {
	return movies.length;
}

console.log(`I film presenti nell'array sono ${totaleFilm()}`);

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

const titoliFilm = movies.map((movie) => movie.Title);

console.log(`I film presenti nell'array dei titoli, sono ${titoliFilm}`);

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

function filmNuovoMillennio(){
  const filmDuemila = movies.filter((movie) => movie.Year >= 2000);
  console.log('I film usciti dal 2000 in poi sono: ');
  filmDuemila.forEach(film => console.log(film.Title));
}

filmNuovoMillennio();

// versione docente
const millennio = (array) => {
  
  return array.filter((film) => parseInt(film.Year) >= 2000);
  // questa è la condizione, e le parentesi graffe non sono necessarie perchè la condizione deve solo restituire qualcosa
}

console.log(millennio(movies));

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

function sommaAnni(){
  // lo zero finale è il valore di partenza, indica che sono numeri
  const totAnni = movies.reduce((totale, movie) => totale + movie.Year, 0);
  return totAnni;
}

console.log(sommaAnni());

// versione docente
/* const sommaAnni = (array) => {
  return array.reduce((valore, element) => valore + parseInt(element.Year), 0);
}

console.log(sommaAnni()); */

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

function trovaFilm(imdbCercato){
  const filmCercato = movies.find(({imdbID}) => imdbID === imdbCercato);
  console.log(filmCercato);

  return filmCercato.Title;
}

console.log(`Il film cercato è ${trovaFilm('tt2395427')}`);

// versione docente
const cercaFilm = (array, id) => {
  return array.find((film) => film.imdbID === id);
}

console.log(cercaFilm(movies, 'tt4154756'));

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/

function trovaIndice(annoUscita){
  const primaUscita = movies.findIndex(({Year}) => parseInt(Year) === annoUscita);
  // console.log(primaUscita);

  return movies[primaUscita].Title;
}

console.log(`Il titolo del primo film uscito è ${trovaIndice(2012)}`);

// versione docente

const cercaAnno = (array, anno) => {
  return array.findIndex((element) => parseInt(element.Year) === anno);
}

console.log(cercaAnno(movies, 1978));
