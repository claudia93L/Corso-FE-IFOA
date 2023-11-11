const libri = [
  { titolo: 'Libro 1', pubblicazione: 2005 },
  { titolo: 'Libro 2', pubblicazione: 1998 },
  { titolo: 'Libro 3', pubblicazione: 2010 },
  { titolo: 'Libro 4', pubblicazione: 1995 },
  { titolo: 'Libro 5', pubblicazione: 2022 },
];

const utenti = [
  { nome: 'Alice', email: 'alice@gmail.com' },
  { nome: 'Bob', email: 'bob@yahoo.com' },
  { nome: 'Charlie', email: 'charlie@gmail.com' },
  { nome: 'David', email: 'david@gmail.com' },
  { nome: 'Eva', email: 'eva@yahoo.com' },
];

const prodotti = [
  { nome: 'Prodotto A', prezzo: 45, inStock: true },
  { nome: 'Prodotto B', prezzo: 55, inStock: false },
  { nome: 'Prodotto C', prezzo: 30, inStock: true },
  { nome: 'Prodotto D', prezzo: 60, inStock: false },
  { nome: 'Prodotto E', prezzo: 40, inStock: true },
];

const citta = [
  { nome: 'Roma', paese: 'Italia' },
  { nome: 'Parigi', paese: 'Francia' },
  { nome: 'New York', paese: 'Stati Uniti' },
  { nome: 'Londra', paese: 'Regno Unito' },
  { nome: 'Berlino', paese: 'Germania' },
];

const studenti = [
  { nome: 'Alice', matematica: 85, scienze: 92 },
  { nome: 'Bob', matematica: 75, scienze: 88 },
  { nome: 'Charlie', matematica: 90, scienze: 85 },
  { nome: 'David', matematica: 70, scienze: 96 },
  { nome: 'Eva', matematica: 88, scienze: 78 },
];

const ordini = [
  { id: 1, stato: 'spedito' },
  { id: 2, stato: 'in sospeso' },
  { id: 3, stato: 'completato' },
  { id: 4, stato: 'spedito' },
  { id: 5, stato: 'in sospeso' },
];

const eventi = [
  { nome: 'Evento A', data: '2023-08-15' },
  { nome: 'Evento B', data: '2023-09-20' },
  { nome: 'Evento C', data: '2023-07-10' },
  { nome: 'Evento D', data: '2023-08-25' },
  { nome: 'Evento E', data: '2023-10-05' },
];

const articoli = [
  { nome: 'Articolo A', inVendita: true },
  { nome: 'Articolo B', inVendita: false },
  { nome: 'Articolo C', inVendita: true },
  { nome: 'Articolo D', inVendita: false },
  { nome: 'Articolo E', inVendita: true },
];

const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 500];

// Array di stringhe
const stringhe = [
  'mela',
  'banana',
  'cetriolo',
  'dado',
  'elefante',
  'sono molto lunga',
  'Ananas',
];

// Array di stringhe e numeri
const stringheENumeri = [
  'uno',
  2,
  'tre',
  4,
  'cinque',
  1,
  'due',
  3,
  'quattro',
  5,
];

const arrayDate = [
  '2023-08-15',
  '2023-09-20',
  '2023-07-10',
  '2023-08-25',
  '2023-10-05',
];

// FOREACH - Array

//   Stampare tutti i numeri pari dall'array utilizzando il metodo forEach().

console.log('Numeri pari');
numeri.forEach((el) => {
  if (el % 2 === 0) {
    console.log(el);
  }
});

//   Stampare tutti i numeri dispari dall'array utilizzando il metodo forEach().

console.log('Numeri dispari');
numeri.forEach((el) => {
  if (el % 2 !== 0) {
    console.log(el);
  }
});

//   Stampare tutti i numeri maggiori di 50 dall'array utilizzando il metodo forEach().
console.log('Numeri maggiori di 50');
numeri.forEach((el) => {
  if (el > 50) {
    console.log(el);
  }
});

//   Stampare tutte le stringhe con una lunghezza superiore a 10 caratteri utilizzando il metodo forEach().

console.log('Stringhe più lunghe di 10 caratteri');
stringhe.forEach((el) => {
  if (el.length > 10) {
    console.log(el);
  }
});

//   Stampare tutte le stringhe che iniziano con la lettera "A" utilizzando il metodo forEach().

console.log('Stringhe che iniziano con A');
stringhe.forEach((el) => {
  if (el.startsWith('A')) {
    console.log(el);
  }
});

// FOREACH - Array di oggetti

//   Stampare il titolo e l'anno di pubblicazione di ciascun libro utilizzando il metodo forEach().

libri.forEach((el) =>
  console.log(`${el.titolo} è stato pubblicato nel ${el.pubblicazione}`)
);

//   Stampare il nome e l'email di ciascun utente utilizzando il metodo forEach().
utenti.forEach((el) => console.log(`${el.nome} e l'email è ${el.email}`));

//   Stampare il nome e il prezzo di ciascun prodotto disponibile in stock utilizzando il metodo forEach().

prodotti.forEach((el) => {
  if (el.inStock === true) {
    console.log(`L'articolo ${el.nome} costa ${el.prezzo}`);
  }
});

//   Stampare il nome delle città e il paese a cui appartengono utilizzando il metodo forEach().

citta.forEach((el) => console.log(`${el.nome} si trova in ${el.paese}`));

//   Stampare il nome di ciascun studente e il loro punteggio in matematica utilizzando il metodo forEach().

studenti.forEach((el) =>
  console.log(
    `${el.nome} ha un punteggio in matematica pari a ${el.matematica}`
  )
);

//   Stampare lo stato di ciascun ordine utilizzando il metodo forEach().

ordini.forEach((el) => console.log(el.stato));

//   Stampare il nome dell'evento e la data in cui si svolgerà utilizzando il metodo forEach().

eventi.forEach((el) =>
  console.log(`L'evento ${el.nome} si svolgerà in data ${el.data}`)
);

//   Stampare il nome dell'articolo e se è in vendita o meno utilizzando il metodo forEach().

const inVendita = 'in vendita';
const nonInVendita = 'non in vendita';

articoli.forEach((el) => {
  el.inVendita
    ? console.log(`L'articolo ${el.nome} risulta `.concat(inVendita))
    : console.log(`L'articolo ${el.nome} risulta `.concat(nonInVendita));
});

//   Aggiungere " (anno di pubblicazione)" al titolo di ciascun libro utilizzando il metodo forEach() e sostituire il titolo originale con il nuovo valore.

libri.forEach((el) => {
  el.titolo = el.titolo.concat(` (${el.pubblicazione})`);
  console.log(el.titolo);
});

//   Aggiungere " (email: email)" al nome di ciascun utente utilizzando il metodo forEach() e sostituire il nome originale con il nuovo valore.

utenti.forEach((el) => {
  el.nome = el.nome.concat(` (${el.email})`);
  console.log(el.nome);
});
