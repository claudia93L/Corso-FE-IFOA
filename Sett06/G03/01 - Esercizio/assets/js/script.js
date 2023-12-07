const url = 'https://striveschool-api.herokuapp.com/books';
const row = document.getElementById('row');
const savedBookIds = JSON.parse(localStorage.getItem('bookIds')) || [];

fetch(url)
  .then((response) => response.json())
  .then((data) => createHomepage(data));

function createHomepage(data) {
  data.forEach((el) => {
    const column = createColumn();
    row.appendChild(column);
    column.appendChild(createCard(el));
  });
}

function createColumn() {
  const column = document.createElement('div');
  column.classList.add('col-md-4', 'col-sm-6', 'col-lg-3', 'col-xl-2');

  return column;
}

function createCard(el) {
  const card = document.createElement('div');
  card.classList.add('card');

  const img = document.createElement('img');
  img.classList.add('card-img-top');
  img.src = el.img;
  card.appendChild(img);

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  card.appendChild(cardBody);

  const h4 = document.createElement('h4');
  h4.classList.add('card-title');
  cardBody.appendChild(h4);
  h4.textContent = `Titolo: ${el.title}`;

  const h5 = document.createElement('h5');
  h5.classList.add('card-text');
  cardBody.appendChild(h5);
  h5.textContent = `Prezzo: ${el.price}`;

  const cardFooter = document.createElement('div');
  cardFooter.classList.add('card-footer', 'bg-dark');
  card.appendChild(cardFooter);

  const btnBuy = document.createElement('button');
  btnBuy.type = 'button';
  btnBuy.classList.add('btn', 'btn-primary');
  btnBuy.textContent = 'Compra ora';
  cardFooter.appendChild(btnBuy);

  const btnRemove = document.createElement('button');
  btnRemove.type = 'button';
  btnRemove.classList.add('btn', 'btn-warning');
  btnRemove.textContent = 'Scarta';
  cardFooter.appendChild(btnRemove);

  const btnCartDelete = document.createElement('button');
  btnCartDelete.type = 'button';
  btnCartDelete.classList.add('btn', 'btn-danger');
  btnCartDelete.textContent = 'X';
  cardFooter.appendChild(btnCartDelete);

  btnRemove.onclick = () => {
    card.remove();
  };

  btnBuy.onclick = () => {
    if (!savedBookIds.includes(el.asin)) {
      savedBookIds.push(el.asin);
      localStorage.setItem('bookIds', JSON.stringify(savedBookIds));
    }
  };

  btnRemove.onclick = () => {
    removeFromCart(el.asin);
  };

  return card;
}

function removeFromCart(bookId) {
  const updatedBookIds = savedBookIds.filter((id) => id !== bookId);

  localStorage.setItem('bookIds', JSON.stringify(updatedBookIds));
}
