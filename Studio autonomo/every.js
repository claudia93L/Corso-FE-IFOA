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

const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Array di stringhe
const stringhe = ['mela', 'banana', 'cetriolo', 'dado', 'elefante'];

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

// EVERY - Array

//   Verifica se tutti i numeri in un array di numeri sono pari utilizzando every().

//   Controlla se tutti i numeri in un array di numeri sono maggiori di 10 utilizzando every().

//   Verifica se tutte le stringhe in un array di stringhe hanno una lunghezza superiore a 5 caratteri utilizzando every().

//   Controlla se tutte le stringhe in un array di stringhe iniziano con la lettera 'A' utilizzando every().

//   Verifica se tutti i numeri in un array di numeri sono divisibili per 3 utilizzando every().

//   Controlla se tutte le parole in un array di stringhe sono in maiuscolo utilizzando every().

//   Verifica se tutte le date in un array di date sono nel futuro utilizzando every().

//   Controlla se tutti i numeri in un array di numeri sono multipli di 5 utilizzando every().

//   Verifica se tutti i nomi in un array di stringhe contengono almeno una vocale utilizzando every().

//   Controlla se tutti i valori in un array di booleani sono true utilizzando every().

// EVERY - Array di oggetti

//   Verifica se tutti i libri nell'array libri sono stati pubblicati dopo il 2000 utilizzando every().

//   Controlla se tutti gli utenti nell'array utenti hanno una email con dominio 'gmail.com' utilizzando every().

//   Verifica se tutti i prodotti nell'array prodotti sono in stock utilizzando every().

//   Controlla se tutti i nomi delle città nell'array citta iniziano con la lettera 'R' utilizzando every().

//   Verifica se tutti gli studenti nell'array studenti hanno ottenuto un punteggio superiore a 80 in matematica utilizzando every().

//   Controlla se tutti gli ordini nell'array ordini hanno lo stato 'spedito' utilizzando every().

//   Verifica se tutti gli eventi nell'array eventi si svolgono dopo il 2023-08-01 utilizzando every().

//   Controlla se tutti gli articoli nell'array articoli sono in vendita utilizzando every().

//   Verifica se tutti i libri nell'array libri hanno un titolo con una lunghezza maggiore di 5 caratteri utilizzando every().

//   Controlla se tutti gli utenti nell'array utenti hanno nomi con una lunghezza maggiore di 3 caratteri utilizzando every().
