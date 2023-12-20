const mainOne = document.querySelector('.mainOne');
const squareOne = document.querySelector('.squareOne');
const squareTwo = document.querySelector('.squareTwo');
const squareThree = document.querySelector('.squareThree');

const mainTwo = document.querySelector('.mainTwo');
const squareFour = document.querySelector('.squareFour');
const squareFive = document.querySelector('.squareFive');
const squareSix = document.querySelector('.squareSix');

// seleziona i children dell'HTML e restituisce una HTMLCollection
const mainTwoChildren = mainTwo.children;

// event bubbling
// al click di .main cambierà colore .main
mainOne.addEventListener('click', function (event) {
  mainOne.style.backgroundColor = 'darkgrey';
});

// al click di .squareOne, cambierà colore sia .squareOne che .main
squareOne.addEventListener('click', function (event) {
  squareOne.style.backgroundColor = 'blue';
});

// stop event bubbling
// al click di .squareTwo cambierà colore solo .squareTwo
squareTwo.addEventListener('click', function (event) {
  event.stopPropagation();
  squareTwo.style.backgroundColor = 'midnightblue';
});

// event propagation
// attiverà il cambio colore a .squareThree e .main al click dei figli, e di .squareThree
squareThree.addEventListener('click', function (event) {
  squareThree.style.backgroundColor = 'lightsalmon';
});

// event bubbling con ciclo per ottenere i children del .main e applicare l'effetto a tutti

mainTwo.addEventListener('click', function (event) {
  mainTwo.style.backgroundColor = 'lightgrey';
});

mainTwo.addEventListener('click', function (event) {
  // Array.from() converte la HTMLCollection in un array
  Array.from(mainTwoChildren).forEach(function (div) {
    div.style.backgroundColor = 'darkred';
  });
});
