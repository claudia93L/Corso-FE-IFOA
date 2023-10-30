/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

// stringhe - si tratta di contenuti testuali e va scritto tra apici (virgolette) doppi o singoli
const myName = 'Claudia';
// numerico - si tratta di numeri interi e decimali (con virgola)
let eta = 29.5;
let eta_arrotondata = 29;
// booleano - accetta due valori --> true e false, che equivalgono rispettivamente a 1 e 0
let donna = true;

console.log('***Esercizio 1 e 2***');
console.log('Il mio nome è ' + myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let num1 = 12;
let num2 = 20;
const somma = num1 + num2;

console.log('***Esercizio 3***');
console.log(
  'La somma del primo numero, ' +
    num1 +
    ' e il secondo numero, ' +
    num2 +
    ' è: ' +
    somma
);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12;

console.log('***Esercizio 4***');
console.log('Il valore della variabile x è ' + x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = 'Lai';

console.log('***Esercizio 5***');
console.log(
  'Il valore della variabile name non può essere modificato, essendo una costante, ed è rimasto ' +
    myName
);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let num3 = 4;
let sottrazione = x - num3;

console.log('***Esercizio 6***');
console.log(
  'La sottrazione del primo numero, ' +
    num3 +
    ' e il secondo numero, ' +
    x +
    ' è: ' +
    sottrazione
);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = 'john';
let name2 = 'John';

console.log('***Esercizio 7***');
console.log('I nomi sono diversi?');
console.log(name1 != name2);
console.log('I nomi sono uguali?');
console.log(name1 === name2);

name2 = 'john';
console.log('I nomi sono diversi?');
console.log(name1 !== name2);
console.log('I nomi sono uguali?');
console.log(name1 === name2);
