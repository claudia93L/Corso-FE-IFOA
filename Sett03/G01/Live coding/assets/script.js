// Selezione elementi da checkbox, forEach, spread operator e memorizzazione valori
let studente = {
  nome: 'Mario',
  cognome: 'Rossi',
  materie: [],
};

console.log(studente);

// Selezione elementi da checkbox

let checkHtml = document.getElementById('HTML');
let chekCss = document.getElementById('CSS');
let checkJs = document.getElementById('JS');

let scelti = [checkHtml, chekCss, checkJs];

function invia() {
  // l'array dev'essere locale per essere svuotato ad ogni "INVIA" altrimenti continuerà a pushare nell'array
  let corsi = [];
  document.getElementById('scelti').innerHTML = '';
  /* una funzione normale si sarebbe scritta -->
    scelti.forEach(function el(){})
    */
  // le funzioni freccia non hanno un nome, sono anonime
  // non si possono usare sempre. con i metodi degli array, però, si usano quasi sempre
  // ha un comportamento diverso dalle declared functions
  scelti.forEach((el) => {
    // checked -> analizza se l'elemento è selezionato nella checkbox
    if (el.checked) {
      corsi.push(el);
    }
  });
  document.getElementById('scelti').innerHTML = `corsi scelti: ${corsi}`;
  studente.materie.push(...corsi);
  console.log(studente);
}

// map si utilizza quando deve calcolare con un valore che sta già nell'array
// in questo caso, si doveva uttilizzare il forEach, perchè noi dovevamo dargli il valore da calcolare

let arrayNomi = [
  'Mario',
  'Aldo',
  'Anna',
  'Nicola',
  'Maria',
  'Giovanni',
  'Giulia',
];

const nomiA = arrayNomi.map((el) => {
  if (el.charAt(0) === 'A') {
    return el;
  }
});

// map deve PER FORZA fare qualcosa per ogni elemento dell'array
// nel console log mostrerà undefined per tutti i valori che non rispettano la condizione
console.log(nomiA);

const lunghezzaNomi = arrayNomi.map((el) => {
  return el.length;
});

console.log(lunghezzaNomi);
