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

/*

Consente di eseguire una funzione su ogni elemento dell’array e NON crea un nuovo array. 

Sintassi:

arr.forEach(function(item, index, array) {
  // ... fa qualcosa con l'elemento
});
*/

// MAP

/*

Stessa logica di funzionamento del forEach(), ma ritorna un array con gli elementi ciclati ed eventuali condizioni da rispettare

let result = arr.map(function(item, index, array) {
  // ritorna il nuovo valore piuttosto di item
})

La funzione viene chiamata per ogni elemento dell’array e ritorna un array con i risultati.

*/

// SPLICE

/* 

Il metodo arr.splice è un coltellino svizzero per array. Può fare qualsiasi cosa: aggiungere e rimuovere elementi, ovunque.

La sintassi è:

arr.splice(start[, deleteCount, elem1, ..., elemN])

Modifica l’array partendo dall’indice start; rimuove deleteCount elementi ed inserisce elem1, ..., elemN. Infine ritorna un array contenente gli elementi rimossi.

La funzione splice() viene utilizzata per modificare il contenuto di un array rimuovendo o sostituendo elementi esistenti e/o aggiungendone di nuovi. 

es -> numeri.splice(0, 0, 38);

Il primo argomento (0) è l'indice in cui inserire il nuovo elemento (in questo caso, all'inizio dell'array).
Il secondo argomento (0) indica che non vogliamo rimuovere alcun elemento.
Il terzo argomento (38) è il nuovo numero che stiamo aggiungendo.

Quando usi splice() per rimuovere un elemento durante l'iterazione, il tuo array si accorcerà, ma l'indice della tua iterazione continuerà a incrementarsi. Questo porta a risultati imprevisti.

Per evitare questo problema, puoi invertire l'iterazione o utilizzare un ciclo for tradizionale:



*/

// SLICE

/*

La sintassi è:

arr.slice([start], [end])

Ritorna un nuovo array contente tutti gli elementi a partire da "start" fino ad "end" ("end" escluso). Sia start che end possono essere negativi; in tal caso si inizierà a contare dalla coda dell’array.

Funziona come str.slice, ma crea dei sotto-array piuttosto che sotto-stringhe.

*/
