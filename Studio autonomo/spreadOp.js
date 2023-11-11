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

// Copia un array di oggetti prodotti in un nuovo array copiaProdotti utilizzando lo spread operator.
const copiaProdotti = [...prodotti];
//console.log(copiaProdotti);

// Aggiungi un nuovo oggetto nuovoProdotto a un array di oggetti prodotti utilizzando lo spread operator per creare una copia con il nuovo oggetto.

const nuovoProdotto = [
  ...prodotti,
  { nome: 'Prodotto Nuovo', prezzo: 30, inStock: true },
];
//console.log(nuovoProdotto);

// Unisci due array di oggetti arrayA e arrayB in un unico array unioneArray utilizzando il spread operator.

const arrayUnito = [...eventi, ...articoli];
//console.log(arrayUnito);

// Rimuovi un oggetto specifico da un array di oggetti prodotti utilizzando il spread operator.
const arrayAggiornato = [...nuovoProdotto];

// console.log(arrayAggiornato);
// per eliminare l'ultimo
//arrayAggiornato.pop();
// per eliminare il primo
//arrayAggiornato.shift();

const prodottoDaEliminare = 'Prodotto Nuovo';
arrayAggiornato.forEach((element) => {
  if (element.nome === prodottoDaEliminare) {
    const indexEl = arrayAggiornato.indexOf(element);
    arrayAggiornato.splice(indexEl, 1);
  }
});

// console.log(arrayAggiornato);

// Crea un nuovo array di oggetti nuovoElencoProdotti copiando un array di oggetti prodotti utilizzando il spread operator e aggiungi un nuovo oggetto nuovoProdotto alla fine dell'array.

const nuovoElencoProdotti = [
  ...prodotti,
  { nome: 'Prodotto Nuovo 2', prezzo: 5.99, inStock: false },
];

// console.log(nuovoElencoProdotti);

// Estrai solo gli oggetti con un certo criterio (ad esempio, prezzo superiore a 50) da un array di oggetti prodotti utilizzando il spread operator.

const arrayProdottiNotInStock = [...prodotti].filter(
  (el) => el.inStock === false
);

//console.log(arrayProdottiNotInStock);

// Copia un array di oggetti studenti in un nuovo array copiaStudenti utilizzando lo spread operator.

const copiaStudenti = [...studenti];

// console.log(copiaStudenti);

// Aggiungi un nuovo oggetto nuovoStudente a un array di oggetti studenti utilizzando il spread operator per creare una copia con il nuovo oggetto.

const nuovoStudente = [
  ...studenti,
  { nome: 'Claudia', matematica: 100, scienze: 20 },
];

// console.log(nuovoStudente);

// Unisci due array di oggetti arrayX e arrayY in un unico array unioneArray utilizzando il spread operator.

const unioneArrayDue = [...libri, ...citta];

// console.log(unioneArrayDue);

// Rimuovi un oggetto specifico da un array di oggetti elencoStudenti utilizzando il spread operator.

const elencoStudenti = [...studenti].filter((el) => el.scienze > 90);

// console.log(elencoStudenti);

// Copia l'array ordini in un nuovo array copiaOrdini utilizzando il spread operator.

const copiaOrdini = [...ordini];
// console.log(copiaOrdini);

// Crea un nuovo array eventi2 aggiungendo un nuovo evento a eventi utilizzando il spread operator.

const eventi2 = [
  ...eventi,
  { nome: 'Concertone a Cagliari', data: '2023-15-11' },
];

// console.log(eventi2);

// Copia l'array articoli in un nuovo array copiaArticoli utilizzando il spread operator.

const copiaArticoli = [...articoli];

// console.log(copiaArticoli);

// Crea un nuovo array libri2 che includa tutti gli elementi di libri con un nuovo libro aggiunto in fondo utilizzando il spread operator.

const libri2 = [...libri, { titolo: 'Il suggeritore', pubblicazione: 2023 }];

// console.log(libri2);

// Copia l'array utenti in un nuovo array copiaUtenti e rimuovi un utente da copieUtenti utilizzando il spread operator.

const copiaUtenti = [...utenti].filter((el) => el.nome !== 'David');

// console.log(copiaUtenti);

// Crea un nuovo array prodotti2 che contenga solo i prodotti in stock da prodotti utilizzando il spread operator.

const prodotti2 = [...prodotti].filter((el) => el.inStock === true);
// console.log(prodotti2);

// Copia l'array citta in un nuovo array copiaCitta e modifica il nome di una città all'interno di copiaCitta utilizzando il spread operator.

const copiaCitta = [...citta];

copiaCitta.forEach((el) => {
  if (el.nome === 'Londra') {
    const idCitta = copiaCitta.indexOf(el);
    copiaCitta[idCitta].nome = 'Edinburgo';
  }
});

//console.log(copiaCitta);

// Unisci due array studenti2 e studenti3 in un unico array mergedStudenti utilizzando il spread operator.

const mergedStudenti = [...studenti, ...elencoStudenti];

// console.log(mergedStudenti);

// Copia l'array ordini in un nuovo array copiaOrdini e modifica lo stato di un ordine all'interno di copiaOrdini utilizzando il spread operator.

const copiaOrdini2 = [...ordini];

copiaOrdini2.forEach((el) => {
  if (el.id === 5) {
    el.stato = 'Completato';
  }
});

// console.log(copiaOrdini2);

// Crea un nuovo array eventi3 che includa solo gli eventi futuri da eventi utilizzando il spread operator.

// Copia l'array articoli in un nuovo array copiaArticoli e modifica lo valore di inVendita per un articolo all'interno di copiaArticoli utilizzando il spread operator.

// Crea un nuovo array libri3 che contenga solo i libri pubblicati prima del 2000 da libri utilizzando il spread operator.

// Copia l'array utenti in un nuovo array copiaUtenti e ordina copiaUtenti in base al nome utilizzando il spread operator.

// Crea un nuovo array prodotti3 che contenga solo i prodotti con un prezzo superiore a 50 da prodotti utilizzando il spread operator.

// Copia l'array citta in un nuovo array copiaCitta e filtra copiaCitta per includere solo le città in Italia utilizzando il spread operator.
