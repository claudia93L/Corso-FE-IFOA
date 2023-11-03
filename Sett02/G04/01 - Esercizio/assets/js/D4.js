/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1, l2) {
  let areaRettangolo = l1 * l2;

  return areaRettangolo;
}

console.log("L'area del rettangolo è " + area(5, 20));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare la loro somma moltiplicata per tre.
*/

function crazySum(num1, num2) {
  let somma = num1 + num2;

  if (num1 !== num2) {
    return somma;
  } else {
    return somma * 3;
  }
}

console.log('La somma dei due numeri è pari a ' + crazySum(5, 5));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(num) {
  let differenza = Math.abs(num / 19);
  if (num > 19) {
    return differenza * 3;
  } else {
    return differenza;
  }
}

let numeroArgomento = 3;

console.log(
  'La differenza dei due numeri è pari a ' + crazyDiff(numeroArgomento)
);

// versioni con arrotondamento

console.log(
  'La differenza arrotondata per difetto dei due numeri è pari a ' +
    Math.floor(crazyDiff(numeroArgomento))
);

console.log(
  'La differenza arrotondata per eccesso dei due numeri è pari a ' +
    Math.ceil(crazyDiff(numeroArgomento))
);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}

let numero1 = 50;
let numero2 = 400;
let numero3 = 5;

console.log(
  'Il numero inserito è compreso tra 20 e 100, o uguale a 400? ' +
    boundary(numero1)
);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve ritornare la stringa originale senza alterarla.
*/

function epify(stringa1) {
  if (stringa1.indexOf('EPICODE') === 0) {
    return stringa1;
  } else {
    return 'EPICODE ' + stringa1;
  }
}

console.log('Il risultato della stringa è: ' + epify('EPICODE corso'));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(num1) {
  if (num1 > 0) {
    if (num1 % 3 === 0 || num1 % 7 === 0) {
      return true;
    }
  } else {
    return false;
  }
}

let risultatoMultiplo = check3and7(5);

console.log(
  risultatoMultiplo
    ? 'Il numero inserito è un multiplo di 3 o di 7'
    : 'Il numero inserito non è un multiplo di 3 o di 7'
);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(stringaOriginale) {
  let lettereStringa = stringaOriginale.split('');
  // con il metodo degli array reverse, inverto gli elementi che si trovano all'interno dell'array
  let arrayLettere = lettereStringa.reverse();
  // con il metodo degli array join, unisco i singoli elementi (lettere) attualmente presenti nell'array in un'unica parola che sarà ora una stringa. indico tra parentesi di non volere un separatore
  let arrayRovesciato = arrayLettere.join('');

  return arrayRovesciato;
}

console.log('La stringa rovesciata è ' + reverseString('ciao'));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(stringaInput) {
  let paroleStringa = stringaInput.split(' ');

  for (let i = 0; i < paroleStringa.length; i++) {
    // prendo il primo carattere di ogni parola che ho inserito nell'array e la rendo maiuscola con charAt e toUpperCase
    // utilizzo poi il metodo slice, indicando una posizione di partenza di 1 (quindi la seconda lettera) per rimuovere la prima lettera che è rimasta minuscola
    paroleStringa[i] =
      paroleStringa[i].charAt(0).toUpperCase() + paroleStringa[i].slice(1);
  }

  // con join riunisco le parole/elementi dell'array e lo trasformo nuovamente in stringa
  return paroleStringa.join(' ');
}

console.log(upperFirst('ciao sono claudia'));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
