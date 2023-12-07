// FETCH POST

const url = 'https://jsonplaceholder.typicode.com/posts';

function createPost() {
  console.log('inizio operazione');

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'Authentication': 'tokendiautenticazione',
      // 'Accept: application/json
    },
    body: JSON.stringify({
      nome: 'Mario',
      cognome: 'Rossi',
      citta: 'Roma',
      telefono: '3289758957',
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

createPost();

// FETCH FORMDATA

const formData = new FormData();
formData.append('nome', 'Mario');
formData.append('cognome', 'Rossi');

const options = {
  method: 'POST',
  body: formData,
};

fetch(url, options).then((response) => {
  if (!response.ok) {
    console.log(response.statusText);
  } else {
    response.json().then((data) => console.log(data));
  }
});
