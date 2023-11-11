// ARROW FUNCTIONS

/* 

le arrow functions si dichiarano rimuovendo la keyword function, e dichiarando l'arrow function come una variabile. La keyword function viene sostituita dal simbolo della freccia =>
le parentesi graffe si aprono soltanto se si deve svolgere più di un'istruzione (solitamente più di un return) e non è necessario specificare la parola chiave perchè è già un comportamento implicito dell'arrow function

*/

// PARAMETRI RESTO

/* 

I rest parameter ... si inseriscono come parametro di una funzione, con un nome a scelta, e raccoglieranno gli argomenti della funzione inseriti all'interno di un'array utilizzabile all'interno della funzione

Dev'essere sempre in posizione finale in presenza di altri parametri, perchè raccoglie quelli in eccesso/restanti

Caso d'uso -> L’operatore parametri di resto viene utilizzato per creare una funzione che accetta un qualsiasi numero di argomenti.

*/

// OPERATORE DI ESPANSIONE

/* 

Lo spread operator espande un array/oggetto in una lista di parametri e successivamente li inserisce in un nuovo array/oggetto.
Questo permette di creare rapidamente una copia dell'array/oggetto con cui dobbiamo lavorare. 
Solitamente si trova all'interno della chiamata di una funzione.

let arrCopy = [...arr];
let objCopy = {...obj};

Caso d'uso: 
 
1. Copiare array -> vedi esempio sopra
2. Unire due o più array -> const arrayUnito = [...array1, ...array2];
3. Passare gli Elementi di un Array a una Funzione -> const risultato = nomeFunc(...arr);
4. Creare un Nuovo Oggetto con Proprietà Aggiuntive -> const nuovoOggetto = { ...oggettoOriginale, key: 'value' };
5. Clonare Oggetti -> vedi esempio sopra

*/

// FILTER

/* 
    Permette di filtrare un array, ritornando in un nuovo array soltanto gli elementi che rispecchiano la condizione specificata
*/

// FOREACH

// MAP
