// Ricevere attraverso un form il nome e l'anno di nascita, calcolare l'età, verificare se la persona è maggiorenne o minorenne, salutarla indicando la maggiore o minore età

/*
1. LEGGERE IL CAMPO NOME E MEMORIZZARLO
2. LEGGERE IL CAMPO ANNO E MEMORIZZARLO
3. CONTROLLARE LA VALIDITà DEL FORM
4. CALCOLARE L'ETà
5. VERIFICA LA MAGGIORE O MINORE ETà
6. SCRIVERE NELL'HTML
7. CANCELLARE IL FORM

EVENT-DRIVEN --> Eventi che fanno avvenire delle cose, avviano delle funzionalità

EVENTO SCATENANTE
click del bottone "verifica"

VARIABILI GLOBALI
nome
anno
stato
*/

let nome; // globale in quanto utilizzata per leggere il campo di input e per stampare a video
let anno; // globale in quanto utilizzata per leggere il campo di input, calcolare l'età, verificare l'età e per stampare a video
let eta;
let stato; // globale in quanto utilizzata per verificare l'età e stampare a video
let errore = document.getElementById('errore');
let esegui;

// event handler - si scrive per convenzione - decide con quale ordine le funzioni dovranno partire
function eventHandler() {
  leggiForm();
  controlla();
  if (esegui) {
    calcolaEta();
    verificaEta();
    scriviHTML();
    // tecnica - dopo che un form ha fatto ciò che deve fare, lo si svuota
    cancellaForm();
  } else {
    errore.innerHTML =
      'Attenzione! Compilare tutti i campi e inserire un numero tra 1900 e 2023';
    cancellaForm();
    return;
  }
}

function leggiForm() {
  nome = document.getElementById('nome').value;
  anno = document.getElementById('anno').value;
  // verifichiamo se stiamo leggendo il form
  // console.log(nome, anno);
}

// controllo dati input
function controlla() {
  esegui = false;
  if (anno >= 1900 && anno <= 2023) {
    if (nome != '' && anno != '') {
      errore.innerHTML = '&nbsp;';
      esegui = true;
    }
    return esegui;
  }
}

function calcolaEta() {
  eta = 2023 - Number(anno); // per essere sicuri che ciò che arriva dal form venga trasformato in numbero, arrivando dal form sottoforma di stringa, effettuiamo un casting/conversione di tipo
}

function verificaEta() {
  stato = eta >= 18 ? 'maggiorenne' : 'minorenne';
  // console.log(stato);
}

function scriviHTML() {
  document.getElementById('mioNome').innerHTML = 'Ciao ' + nome;
  document.getElementById('miaVerifica').innerHTML =
    'La tua età è ' + eta + ' anni e sei ' + stato + '!';
}

function cancellaForm() {
  document.getElementById('nome').value = '';
  document.getElementById('anno').value = '';
}
