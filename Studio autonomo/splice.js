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

// SPLICE - Array

//   Aggiungi un nuovo numero all'array numeriArray utilizzando il metodo splice().

numeri.splice(numeri.length, 0, 38);

//console.log(numeri);

//   Rimuovi un numero specifico dall'array numeriArray utilizzando il metodo splice().

const numeroRimosso = numeri.splice(3, 1);

//console.log(numeroRimosso);

//   Modifica un numero nell'array numeriArray in una posizione specifica utilizzando il metodo splice().

numeri.splice(0, 0, 30);

//console.log(numeri);

//   Inserisci una stringa nell'array stringhe in una posizione specifica utilizzando il metodo splice().

stringhe.splice(stringhe.length, 0, 'stringa per lo splice');

//console.log(stringhe);

//   Rimuovi una stringa specifica dall'array stringhe utilizzando il metodo splice().

stringhe.splice(0, 1);

//console.log(stringhe);

//   Inserisci un nuovo valore in un array di date utilizzando il metodo splice().

arrayDate.splice(arrayDate.length, 0, '2023-11-11');

//console.log(arrayDate);

//   Rimuovi una data specifica dall'array di date utilizzando il metodo splice().

arrayDate.splice(4, 1);

// console.log(arrayDate);

// SPLICE - Array di oggetti

//   Aggiungi un nuovo libro all'array libri utilizzando il metodo splice().

const libriAgg = [...libri];

libriAgg.splice(libriAgg.length, 0, {
  titolo: 'Il suggeritore',
  pubblicazione: 2023,
});

//console.log(libriAgg);

//   Rimuovi un utente dall'array utenti in base all'indice utilizzando il metodo splice().

const copiaUtenti = [...utenti];

copiaUtenti.splice(0, 1);

//console.log(copiaUtenti);

//   Modifica il prezzo di un prodotto nell'array prodotti utilizzando il metodo splice().

// AIUTO

/* const copiaProdotti = [...prodotti];

const indiceProdotto = copiaProdotti.length;

const oggettoEstratto = copiaProdotti[indiceProdotto];

copiaProdotti[indiceProdotto].prezzo = 99.99;

copiaProdotti.splice(indiceProdotto, 1, oggettoEstratto); */

//console.log(copiaProdotti);

//   Inserisci una nuova città nell'array citta in una posizione specifica utilizzando il metodo splice().

//   Rimuovi uno studente dall'array studenti in base a una condizione specifica utilizzando il metodo splice().

/* const copiaStudenti = [...studenti];

const removeStudent = () => {
  for (let i = 0; i < copiaStudenti.length; i++) {
    if (copiaStudenti[i].scienze < 90) {
      copiaStudenti.splice(i, 1);
    }
  }
  return copiaStudenti;
};

removeStudent();

console.log(copiaStudenti); */

//   Aggiungi un nuovo ordine all'array ordini utilizzando il metodo splice().

//   Rimuovi un evento dall'array eventi in base alla data utilizzando il metodo splice().

//   Modifica lo stato di un articolo nell'array articoli utilizzando il metodo splice().

//   Inserisci un nuovo animale nell'array animali in una posizione specifica utilizzando il metodo splice().

//   Rimuovi una persona dall'array persone in base a un'età specifica utilizzando il metodo splice().
