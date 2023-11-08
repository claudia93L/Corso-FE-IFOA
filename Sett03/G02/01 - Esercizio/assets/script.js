``;

/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const changeTitle = function (nuovoTitolo) {
  document.querySelector('h1').innerText = nuovoTitolo;
};

changeTitle('Questo è il nuovo titolo della pagina');

/* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */

const addClassToTitle = function () {
  document.querySelector('h1').classList.add('myHeading');
};

addClassToTitle();

/* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div
       */

const changePcontent = function (nuovoTesto) {
  const p = document.querySelectorAll('div p');

  p.forEach((para) => (para.innerText = nuovoTesto));
};

changePcontent('Nuovo testo dei paragrafi interni a un div');

/* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */

const changeUrls = function (newUrl) {
  const link = document.querySelectorAll('a:not(footer a)');

  link.forEach((a) => a.setAttribute('href', newUrl));
};

changeUrls('https://www.google.com');

/* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */

const addToTheSecond = function () {
  const secondaLista = document.querySelector('#secondList');
  const newList = document.createElement('li');
  secondaLista.appendChild(newList).innerText = '4th';
};

addToTheSecond();

/* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */

const addParagraph = function () {
  const primoDiv = document.querySelector('div');
  const newPara = document.createElement('p');
  primoDiv.appendChild(newPara).innerText = 'Testo di prova';
};

addParagraph();

/* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */

const hideFirstUl = function () {
  document.querySelector('#firstList').style.display = 'none';
};

hideFirstUl();

/* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */

const paintItGreen = function () {
  const ul = document.querySelectorAll('ul');
  ul.forEach((lista) => (lista.style.backgroundColor = 'green'));
};

paintItGreen();

/* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */

const makeItClickable = function () {
  const h1 = document.querySelector('h1');

  h1.onclick = () => {
    h1.innerText = h1.innerText.slice(0, -1);
  };
};

/* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */

const revealFooterLink = function () {
  const footer = document.querySelector('footer');
  const link = document.querySelector('footer a');

  footer.onclick = () => {
    alert(link);
  };
};

/* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */

const datiTabella = [
  {
    immagine: 'img1.jpg',
    nomeProdotto: 'Prodotto 1',
    quantita: 10,
    prezzo: 25.99,
  },
  {
    immagine: 'img2.jpg',
    nomeProdotto: 'Prodotto 2',
    quantita: 15,
    prezzo: 19.99,
  },
  {
    immagine: 'img3.jpg',
    nomeProdotto: 'Prodotto 3',
    quantita: 8,
    prezzo: 34.99,
  },
];

const generateTable = function () {
  const tableArea = document.getElementById('tableArea');
  const tabella = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  // Heading della tabella
  const th = document.createElement('tr');
  th.innerHTML =
    '<th>Immagine</th><th>Nome Prodotto</th><th>Quantità</th><th>Prezzo</th>';
  thead.appendChild(th);

  datiTabella.forEach((info) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td><img src="${info.immagine}" alt="${info.nomeProdotto}"></td><td>${info.nomeProdotto}</td><td>${info.quantita}</td><td>${info.prezzo}</td>`;
    tbody.appendChild(tr);
  });

  tabella.appendChild(thead);
  tabella.appendChild(tbody);
  tableArea.appendChild(tabella);
};

generateTable();

/* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */

const addRow = function (img, nome, quantita, prezzo) {
  const tbody = document.querySelector('tbody');
  const tr = document.createElement('tr');
  tr.innerHTML = `<td><img src="${img}" alt="${nome}"></td><td>${nome}</td><td>${quantita}</td><td>${prezzo}</td>`;
  tbody.appendChild(tr);
};

addRow('img4.jpg', 'Prodotto 4', 5, 8.99);

/* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */

const hideAllImages = function () {};

/* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */

const changeColorWithRandom = function () {
  const h2 = document.querySelector('#changeMyColor');

  h2.onclick = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    h2.style.color = `rgb(${red}, ${green}, ${blue})`;
  };
};

/* EXTRA ESERCIZIO 16
       Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
     */

const deleteVowels = function () {};
