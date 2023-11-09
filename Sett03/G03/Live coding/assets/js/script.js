const btn = document.getElementById('invia');

btn.addEventListener('click', function (e) {
  // la e come parametro è una convenzione e rappresenta l'evento del mouse
  // se viene invocato quando l'attributo è true, mentre si esegue l'event listener, si blocca il comportamento di default del browser
  e.preventDefault();

  let form = document.querySelector('form');
  let nome = document.getElementById('nome');
  let cognome = document.getElementById('cognome');
  let email = document.getElementById('email');
  let eta = document.getElementById('eta');

  if (!cognome.checkValidity()) {
    cognome.style.border = '2px red solid';
    document.getElementById('nomeForm').innerText = cognome.validationMessage;
    return;
  } else if (!email.checkValidity()) {
    cognome.style.border = '2px red solid';
    document.getElementById('nomeForm').innerText = email.validationMessage;
    return;
  } else if (!eta.checkValidity()) {
    cognome.style.border = '2px red solid';
    document.getElementById('nomeForm').innerText = eta.validationMessage;
    return;
  }

  cognome.style.border = 'none';

  nome = nome.value;
  cognome = cognome.value;
  email = email.value;
  eta = eta.value;

  confirm('Sei sicuro dei dati inseriti?');

  if (confirm) {
    document.getElementById('nomeForm').innerText = nome;
    document.getElementById('cognomeForm').innerText = cognome;
    document.getElementById('emailForm').innerText = email;
    document.getElementById('etaForm').innerText = eta;
  } else {
    form.reset();
  }
});

// codice per setTimeout() e setInterval()

let btnRigenera = document.getElementById('ricrea');
let codiceHTML = document.getElementById('codice');
let textRigenera = document.getElementById('rigenera');

function generaCodice() {
  // il bottone è disabilitato
  btnRigenera.setAttribute('disabled', true);
  // cancelliamo eventuali stilizzazioni di rigenera()
  codiceHTML.style.textDecoration = 'none';
  textRigenera.innerText = '';

  // si arrotonda sempre per difetto altrimenti, per eccesso, il numero zero non uscirebbe mai
  let codice = Math.floor(Math.random() * 1000001);

  // in questo modo generiamo sempre un codice a 6 cifre
  if (codice < 100000) {
    codice += 100000;
  }

  // scriviamo il codice generato sull'html
  codiceHTML.innerText = codice;

  scadenza();
}

function scadenza() {
  setTimeout(() => {
    rigenera();
    // 10 secondi
  }, 10000);
}

function rigenera() {
  codiceHTML.style.textDecoration = 'line-through';
  textRigenera.innerText = 'Codice scaduto, rigenerare!';
  // abilito il bottone
  btnRigenera.removeAttribute('disabled');
}

generaCodice();
