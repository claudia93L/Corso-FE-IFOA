// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

const arrayNumeri = [];

function giveMeRandom(n) {
  let numeroCasuale;

  for (let i = 0; i < n; i++) {
    numeroCasuale = Math.floor(Math.random() * 11);
    arrayNumeri.push(numeroCasuale);
  }

  return arrayNumeri;
}

let numero = giveMeRandom(15);

//console.log('Lista di numeri casuali da 0 a 10: ' + numero);

let contatore = 0;
function checkArray(arrayNumeri) {
  for (let i = 0; i < arrayNumeri.length; i++) {
    if (arrayNumeri[i] > 5) {
      contatore += arrayNumeri[i];
      console.log('Il numero è maggiore di 5');
    } else {
      console.log('il numero è minore di 5');
    }
  }

  return contatore;
}

console.log(
  "Il totale della somma dei numeri nell'array è " + checkArray(numero)
);

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

const shoppingCart = [
  {
    price: 9,
    name: 'Lampada',
    id: 3875,
    quantity: 3,
  },
  {
    price: 15.99,
    name: 'Stufetta',
    id: 456,
    quantity: 1,
  },
  {
    price: 21,
    name: 'Echo dot',
    id: 234,
    quantity: 2,
  },
];

let totaleCarrello = 0;

function shoppingCartTotal() {
  totaleCarrello = 0;

  for (let i = 0; i < shoppingCart.length; i++) {
    totaleCarrello += shoppingCart[i].price * shoppingCart[i].quantity;
  }
  return Math.ceil(totaleCarrello);
}

console.log(
  'Il totale da pagare, arrotondato per eccesso, è di €' + shoppingCartTotal()
);

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

let acquario = {
  price: 280,
  name: 'acquario',
  id: 3245,
  quantity: 1,
};

let numeroOggettiCarrello = 0;

function addToShoppingCart(nuovoOggetto) {
  shoppingCart.push(nuovoOggetto);

  for (let i = 0; i < shoppingCart.length; i++) {
    numeroOggettiCarrello += shoppingCart[i].quantity;
  }

  return numeroOggettiCarrello;
}

console.log(
  'Il numero di oggetti nel carrello è: ' + addToShoppingCart(acquario)
);

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/
function maxShoppingCart(shoppingCart) {
  let oggettoCostoso = shoppingCart[0];
  for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i].price > oggettoCostoso.price) {
      oggettoCostoso = shoppingCart[i];
    }
  }
  return oggettoCostoso;
}

console.log(
  "L'articolo più costoso nel carrello è " +
    maxShoppingCart(shoppingCart).name +
    ' al costo di €' +
    maxShoppingCart(shoppingCart).price
);

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

function latestShoppingCart(shoppingCart) {
  let lastObject = shoppingCart[shoppingCart.length - 1];
  return lastObject;
}

console.log(
  "L'ultimo oggetto nel carrello è " + latestShoppingCart(shoppingCart).name
);

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

let numeroInput;
let contatoreEstrazione = 0;

function loopUntil(numLoop) {
  while (contatoreEstrazione !== 3) {
    let numeroCasuale = Math.floor(Math.random() * 10);
    console.log('Numero estratto ' + numeroCasuale);
    if (numeroCasuale > numLoop) {
      contatoreEstrazione++;
    }
  }

  return console.log('Il numero è stato superato 3 volte');
}

function controllo(numeroInput) {
  if (numeroInput >= 0 && numeroInput <= 9) {
    return numeroInput;
  } else {
    return console.log(
      "Numero incorretto, dev'essere compreso tra 0 e 9 inclusi"
    );
  }
}

loopUntil(5);

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

const arrayDiNumeri = [
  5,
  7,
  32,
  'ciao',
  9,
  true,
  'ciao',
  15,
  false,
  'ciao',
  20,
];

let totaleSomma = 0;
let mediaAritmetica = 0;
let totaleNumeriArray = 0;

function average(arrayDiNumeri) {
  for (let i = 0; i < arrayDiNumeri.length; i++) {
    if (typeof arrayDiNumeri[i] === 'number') {
      totaleSomma += arrayDiNumeri[i];
      totaleNumeriArray++;
    }
  }

  return (mediaAritmetica = totaleSomma / totaleNumeriArray);
}

console.log('La media aritmetica è ' + average(arrayDiNumeri));

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

let arrayStringhe = [
  'ciao',
  'buongiorno',
  'buonasera',
  'buon pomeriggio',
  'arrivederci',
];

function longest(arrayStringhe) {
  let stringaLunga = arrayStringhe[0];
  for (let i = 0; i < arrayStringhe.length; i++) {
    if (arrayStringhe[i].length > stringaLunga.length) {
      stringaLunga = arrayStringhe[i];
    }
  }
  return stringaLunga;
}

console.log(
  "La parola più lunga dell'array è " +
    longest(arrayStringhe) +
    ' con un numero di caratteri pari a ' +
    longest(arrayStringhe).length
);

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

// non contiene scam/spam
let email1 =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequatur hic facere mollitia quisquam quasi magni, aut nihil nobis minus placeat temporibus magnam similique. Doloribus nobis libero sed veritatis!';
// contiene SPAM
let email2 =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequatur hic facere mollitia quisquam quasi magni, aut nihil nobis minus placeat temporibus magnam similique SPAM. Doloribus nobis libero sed veritatis!';

// contiene scam
let email3 =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequatur hic facere mollitia quisquam quasi magni, aut nihil nobis minus scam temporibus magnam similique quo. Doloribus nobis libero sed veritatis!';

function filtroSpam(email1) {
  let vero = true;

  if (
    email1.includes('spam') ||
    email1.includes('SPAM') ||
    email1.includes('SCAM') ||
    email1.includes('scam')
  ) {
    vero = false;
  }

  return vero;
}

console.log("L'email è sicura? " + filtroSpam(email3));

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

function calcolaGiorni(dataInserita) {
  let dataOdierna = new Date();

  let differenzaTemporale = dataOdierna.getTime() - dataInserita.getTime();
  let differenzaGiorni = differenzaTemporale / (1000 * 3600 * 24);

  differenzaGiorni = Math.floor(differenzaGiorni);
  return differenzaGiorni;
}
console.log(
  'La differenza di giorni tra le due date è pari a ' +
    calcolaGiorni(new Date('2023-10-30')) +
    ' giorni'
);

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

function matrixGenerator(x, y) {}

matrixGenerator(5, 8);
