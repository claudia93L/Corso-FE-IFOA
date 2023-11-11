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

// REDUCE - Array

//   Calcola la somma di tutti i numeri in un array di numeri utilizzando reduce().

//   Trova il numero più grande in un array di numeri utilizzando reduce().

//   Concatena tutte le stringhe in un array di stringhe utilizzando reduce().

//   Calcola il prodotto di tutti i numeri in un array di numeri utilizzando reduce().

//   Trova il numero più piccolo in un array di numeri utilizzando reduce().

//   Calcola la somma delle lunghezze delle stringhe in un array di stringhe utilizzando reduce().

//   Trova il primo numero pari in un array di numeri utilizzando reduce().

//   Crea una stringa che contenga la concatenazione di tutti gli elementi di un array di stringhe, separati da virgole, utilizzando reduce().

//   Calcola la media di tutti i numeri in un array di numeri utilizzando reduce().

//   Trova il numero di occorrenze di una parola specifica in un array di stringhe utilizzando reduce().

// REDUCE - Array di oggetti

//   Calcola la somma di tutte le pubblicazioni dei libri nell'array libri utilizzando reduce().

//   Trova l'utente con la email 'david@gmail.com' nell'array utenti utilizzando reduce().

//   Calcola il prezzo totale dei prodotti disponibili in stock nell'array prodotti utilizzando reduce().

//   Trova la città con il nome 'Parigi' nell'array citta utilizzando reduce().

//   Calcola la media dei punteggi in matematica degli studenti nell'array studenti utilizzando reduce().

//   Conta quante volte lo stato 'spedito' appare nell'array ordini utilizzando reduce().

//   Trova l'evento con la data '2023-08-15' nell'array eventi utilizzando reduce().

//   Calcola il numero totale di articoli in vendita nell'array articoli utilizzando reduce().

//   Trova il libro con la pubblicazione più recente nell'array libri utilizzando reduce().

//   Calcola la somma delle lunghezze delle email degli utenti nell'array utenti utilizzando reduce().
