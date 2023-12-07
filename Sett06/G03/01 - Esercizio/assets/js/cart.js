const cartContainer = document.getElementById('cart-container');
const ul = document.createElement('ul');
const savedBookIds = JSON.parse(localStorage.getItem('bookIds')) || [];

function createCart() {
  savedBookIds.forEach((el) => {
    const li = document.createElement('li');
    li.innerText = el;
    ul.appendChild(li);
  });
}
