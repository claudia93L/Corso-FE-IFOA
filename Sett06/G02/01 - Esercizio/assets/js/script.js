// ESERCIZIO 1

let nomeUtente = '';
const nome = document.getElementById('name');
const span = document.getElementById('nomeSalvato');
const saveBtn = document.getElementById('saveBtn');
const deleteBtn = document.getElementById('deleteBtn');

saveBtn.onclick = () => {
  setNomeUtente();
  getNomeUtente();
};

deleteBtn.onclick = () => {
  removeNomeUtente();
};

function setNomeUtente() {
  nomeUtente = nome.value;
  localStorage.setItem('nomeUtente', nomeUtente);
}

function getNomeUtente() {
  const nomeUtenteLocale = localStorage.getItem('nomeUtente');
  span.innerText = `Il nome salvato è ${nomeUtenteLocale}`;
}

function removeNomeUtente() {
  localStorage.removeItem('nomeUtente');
}

// ESERCIZIO 2
const counter = document.getElementById('counter');
let counterValue = 0;

const manageCounter = () => {
  function updateCounter() {
    counterValue++;
    counter.innerText = counterValue;
  }

  setInterval(updateCounter, 1000);

  return counterValue;
};

function setSessionValue() {
  sessionStorage.setItem('counter', counterValue);
}

manageCounter();
setSessionValue();
