/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let num1 = 10;
let num2 = 15;

if (num1 > num2) {
  let testo =
    'Il primo numero, ' + num1 + ', è maggiore del secondo numero, ' + num2;
  document.getElementById('esercizio1').innerHTML = testo;
} else if (num1 === num2) {
  let testo = 'I due numeri sono uguali';
  document.getElementById('esercizio1').innerHTML = testo;
} else {
  let testo =
    'Il secondo numero, ' + num2 + ', è maggiore del primo numero, ' + num1;
  document.getElementById('esercizio1').innerHTML = testo;
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let num3 = 30;

if (num3 !== 5) {
  console.log('not equal');
} else {
  document.getElementById('esercizio2').innerHTML =
    'Il numero inserito è uguale a 5';
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let num4 = 60;

if (num4 % 5 === 0) {
  console.log('Il numero inserito, ' + num4 + ', è divisibile per 5');
} else {
  document.getElementById('esercizio3').innerHTML =
    'Il numero inserito, ' + num4 + ', non è divisibile per 5';
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let num5 = 16;
let num6 = 8;

if (
  num5 === 8 ||
  num6 === 8 ||
  num5 + num6 === 8 ||
  num5 - num6 === 8 ||
  num6 - num5 === 8
) {
  let testo =
    "Uno dei due numeri inseriti è 8, o l'addizione/sottrazione dei due numeri, ha come risultato 8";
  document.getElementById('esercizio4').innerHTML = testo;
} else {
  let testo =
    'Nessuno dei due numeri equivale a 8, neanche come risultato di addizione o sottrazione';
  document.getElementById('esercizio4').innerHTML = testo;
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 150;
const costoSpedizione = 10;

if (totalShoppingCart >= 50) {
  document.getElementById('esercizio5').innerHTML =
    'Congratulazioni! Hai raggiunto i €50 di spesa minimi, la spedizione sarà gratuita! Spenderai €' +
    totalShoppingCart +
    ' anzichè €' +
    (totalShoppingCart + costoSpedizione);
} else {
  document.getElementById('esercizio5').innerHTML =
    'Ti mancano €' +
    (50 - totalShoppingCart) +
    ' per raggiungere i €50 minimi di spesa per usufruire della spedizione gratuita.';
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e calcolando il totale.
*/

const scontoBlackFriday = 20;
let totaleScontato =
  totalShoppingCart - (totalShoppingCart * scontoBlackFriday) / 100;

if (totalShoppingCart >= 50) {
  document.getElementById('esercizio6').innerHTML =
    'Congratulazioni! Hai raggiunto i €50 di spesa minimi, la spedizione sarà gratuita! Inoltre, verrà applicato uno sconto del 20% per il Black Friday! Spenderai €' +
    totaleScontato +
    ' anzichè €' +
    (totalShoppingCart + costoSpedizione);
} else {
  document.getElementById('esercizio6').innerHTML =
    'Ti mancano €' +
    (50 - totaleScontato) +
    ' per raggiungere i €50 minimi di spesa per usufruire della spedizione gratuita.';
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let num7 = 40;
let num8 = 20;
let num9 = 30;

if (num7 >= num8 && num7 >= num9) {
  if (num8 >= num9) {
    console.log(
      'Numeri in ordine di grandezza: ' + num7 + ', ' + num8 + ', ' + num9
    );
  } else {
    console.log(
      'Numeri in ordine di grandezza: ' + num7 + ', ' + num9 + ', ' + num8
    );
  }
} else if (num8 >= num7 && num8 >= num9) {
  if (num7 >= num9) {
    console.log(
      'Numeri in ordine di grandezza: ' + num8 + ', ' + num7 + ', ' + num9
    );
  } else {
    console.log(
      'Numeri in ordine di grandezza: ' + num8 + ', ' + num9 + ', ' + num7
    );
  }
} else {
  if (num7 >= num8) {
    console.log(
      'Numeri in ordine di grandezza: ' + num9 + ', ' + num7 + ', ' + num8
    );
  } else {
    console.log(
      'Numeri in ordine di grandezza: ' + num9 + ', ' + num8 + ', ' + num7
    );
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let input = '6';

if (typeof input === 'number') {
  document.getElementById('esercizio8').innerHTML =
    "L'input inserito è un numero";
} else {
  document.getElementById('esercizio8').innerHTML =
    "L'input inserito non è un numero";
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let num10 = 15;

if (num10 % 2 === 0) {
  document.getElementById('esercizio9').innerHTML = 'Il numero inserito è pari';
} else {
  document.getElementById('esercizio9').innerHTML =
    'Il numero inserito è dispari';
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 5;

if (val < 5) {
  console.log('Meno di 5');
} else if (val < 10 && val >= 5) {
  console.log('Meno di 10');
} else {
  console.log('Uguale a 10 o maggiore');
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
};

me.city = 'Toronto';

document.getElementById('esercizio11').innerHTML =
  'La città inserita con la nuova proprietà è ' + me.city;

/* ESERCIZIO 12
    Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
  */

delete me.lastName;
document.getElementById('esercizio12').innerHTML =
  "Il cognome è stato rimosso dalla proprietà dell'oggetto, e risulta " +
  me.lastName;

/* ESERCIZIO 13
    Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
  */

delete me.skills[2];

document.getElementById('esercizio13').innerHTML =
  "Rimosso l'ultimo elemento dall'array delle skills. La lista aggiornata è: " +
  me.skills;

/* ESERCIZIO 14
    Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
  */

const arrayNumeri = [];

arrayNumeri[0] = 1;
arrayNumeri[1] = 2;
arrayNumeri[2] = 3;
arrayNumeri[3] = 4;
arrayNumeri[4] = 5;
arrayNumeri[5] = 6;
arrayNumeri[6] = 7;
arrayNumeri[7] = 8;
arrayNumeri[8] = 9;
arrayNumeri[9] = 10;

document.getElementById('esercizio14').innerHTML =
  "Elementi interni all'array appena creato: " + arrayNumeri;

/* ESERCIZIO 15
    Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
  */

arrayNumeri[9] = 100;

document.getElementById('esercizio15').innerHTML =
  "Ultimo numero dell'array aggiornato a " + arrayNumeri[9];
