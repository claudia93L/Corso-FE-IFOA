const url = 'https://striveschool-api.herokuapp.com/books';
const row = document.getElementById('row');

fetch(url)
  .then((response) => response.json())
  .then((data) => sendDataToHomepage(data));

function sendDataToHomepage(data) {
  data.forEach((el) => {
    const column = createColumn();
    row.appendChild(column);
    column.appendChild(createCard(el));
  });
}

function createColumn() {
  const column = document.createElement('div');
  column.classList.add('col', 'col-md-3', 'col-sm-6', 'col-xs-12', 'col-lg-4');

  return column;
}

function createCard(el) {
  const card = document.createElement('div');
  card.classList.add('card');
  const img = document.createElement('img');
  img.classList.add('card-img-top');
  img.src = el.img;
  card.appendChild(img);

  return card;
}
