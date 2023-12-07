/* const url = 'https://striveschool-api.herokuapp.com/books';
const cartContainer = document.getElementById('cart-container');
const savedBookIds = JSON.parse(localStorage.getItem('bookIds')) || [];
const cart = document.getElementById('cart');

fetch(url)
  .then((response) => response.json())
  .then((data) => createCart(data));

cart.onclick = () => {
  createCart();
};

function createCart() {
  const ul = document.createElement('ul');
  cart.appendChild(ul);

  savedBookIds.forEach((el) => {
    const li = document.createElement('li');
    li.innerText = el;
    ul.appendChild(li);
  });
}
 */
