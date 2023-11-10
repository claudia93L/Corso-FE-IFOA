// Dobbiamo capire in che mese siamo, per scriverlo nell'h1, e quanti giorni ha il mese, per generare il corretto numero di celle

const now = new Date();

/* Per salvare gli appuntamenti, abbiamo bisogno di un'array, perchè ogni appuntamento è una stringa, ogni giorno può contenere infiniti appuntamenti e ogni mese ha un numero di giorni variabile. Creeremo quindi un array di array, dove l'array genitore è il mese e gli array figli rappresentano i giorni

[ rappresenta il mese
    [rappresenta il primo giorno e conterrà i vari appuntamenti - '09:00 -live coding', '14:00 - esercizio'], [rappresenta il secondo giorno],....
]

Non sapendo quanti giorni ci sono nel mese in corso, si crea il "guscio" del mese

*/

const appointments = [];

// Dentro appointments pushiamo tanti sottoarray quanti sono i giorni del mese corrente

const monthNames = [
  'Gennaio',
  'Febbraio',
  'Marzo',
  'Aprile',
  'Maggio',
  'Giugno',
  'Luglio',
  'Agosto',
  'Settembre',
  'Ottobre',
  'Novembre',
  'Dicembre',
];

const scriviMese = function () {
  const title = document.querySelector('h1');
  const indiceMese = now.getMonth(); // 10 perchè siamo a novembre
  const nomeMese = monthNames[indiceMese]; // novembre
  title.innerText = nomeMese;
};

scriviMese();

// Sappiamo in che mese siamo, ma quanti giorni ha questo mese? Dal momento che febbraio negli anni bisestili ha 29 giorni, per sapere il mio mese quanti giorni ha, mi serve anche l'anno

const calcolaGiorni = function () {
  const anno = now.getFullYear(); // 2023 perchè siamo nel 2023
  const mese = now.getMonth(); // 10 perchè siamo a novembre

  // Dal momento che nell'oggetto date, il numero dei giorni del mese parte da 1, mi basta sapere qual è l'ultimo giorno del mese in corso per avere il suo numero di giorni. Questo è il numero che ci serve, per creare il corretto numero di celle
  // Per sapere l'ultimo giorno del mese in corso, creo la data del primo giorno del mese successivo al mese in corso e faccio -1
  // anno attuale, mese successivo (mese + 1), giorno zero del mese, che non esiste e che quindi sarà il 30 novembre 2023 -> novembre ha 30 giorni
  let ultimoGiorno = new Date(anno, mese + 1, 0);
  // salviamo esclusivamente il numero dei giorni, che useremo poi come indice
  const numeroGiorni = ultimoGiorno.getDate();
  return numeroGiorni; // è il numero di volte per cui dovrò ripetere la creazione dei div corrispondenti ai singoli giorni
};

// Quando carico un mese, eventuali classi selected precedenti devono essere rimosse, altrimenti mi troverò selezionati i giorni del mese precedente che avevano degli appuntamenti e seleziono l'intero div
// Seleziono TUTTI gli elementi con classe .selected e rimuovo la classe

const deselezionaCelle = function () {
  const celle = document.querySelectorAll('.day'); // getElementsByClassName genera una collezione e forEach non può essere usato, quindi utilizziamo querySelectorAll
  celle.forEach((element) => {
    element.classList.remove('selected');
  });
};

// Quando faccio click su un giorno, nel div #newMeetingDay dovrò leggere la data selezionata

const giornoAppuntamento = function (indiceGiorno) {
  const giorno = document.getElementById('newMeetingDay');
  giorno.classList.add('hasDay');
  giorno.innerText = indiceGiorno + 1; // perchè arriva l'indice, che parte da 0
};

// A questo punto, va creata la "griglia" dei div contenenti i giorni del mese in corso. Questa griglia userà il numero di giorni per gestire l'array globale creato all'inizio e scriverà i vari div

const creaGriglia = function (numeroGiorni) {
  // numeroGiorni è il numero di giorni del mese corrente
  const calendarDiv = document.getElementById('calendar');

  for (let i = 0; i < numeroGiorni; i++) {
    const cellaGiorno = document.createElement('div'); // ad ogni giorno associo un div
    cellaGiorno.classList.add('day'); // stilizzo il div come definito in css

    cellaGiorno.addEventListener('click', function (e) {
      // rendo cliccabili i div dei giorni
      deselezionaCelle(); // deseleziono l'eventuale altra cella selezionata
      cellaGiorno.classList.add('selected'); // aggiungo la classe css per mostrare la selezione del giorno cliccato
      giornoAppuntamento(i); // scrivo il giorno cliccato nella sezione Giorno del form
      // se ci sono già eventi nella giornata, devo far comparire la lista
      if (appointments[i].length > 0) {
        mostraAppuntamenti(i);
      } else {
        const divAppuntamenti = document.getElementById('appointments');
        divAppuntamenti.style.display = 'none';
      }
    });
    // devo scrivere il numero del giorno nei div
    const valoreCella = document.createElement('h3');
    valoreCella.innerText = i + 1;
    // "appendo" gli elementi creati
    cellaGiorno.appendChild(valoreCella);
    calendarDiv.appendChild(cellaGiorno);

    // creato il calendario, inserisco nell'array appointments l'array dei giorni del mese
    appointments.push([]);
  }
};

creaGriglia(calcolaGiorni());

const mostraAppuntamenti = function (indiceGiorno) {
  // Con questa funzione si popola la lista degli appuntamenti con gli appuntamenti del giorno
  // 1. Prendere gli appuntamenti corretti
  const appuntamentiGiorno = appointments[indiceGiorno];
  // 2. Selezionare la lista contenitore
  const lista = document.querySelector('#appointments ul');
  // 3. Svuotare la lista
  lista.innerHTML = '';
  // 4. Ciclare gli appuntamenti del giorno e creare un li per ciascuno di essi
  appuntamentiGiorno.forEach((element) => {
    const newLi = document.createElement('li');
    newLi.innerText = element;
    lista.appendChild(newLi);
  });
  // 5. La lista è piena ma è ancora nascosta
  const divAppuntamenti = document.getElementById('appointments');
  divAppuntamenti.style.display = 'block';
};
