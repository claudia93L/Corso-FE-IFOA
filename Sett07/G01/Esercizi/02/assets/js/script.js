const main = document.querySelector('.main');
const squareOne = document.querySelector('.squareOne');
const squareTwo = document.querySelector('.squareTwo');
const squareThree = document.querySelector('.squareThree');

// event bubbling
// al click di .main cambierà colore .main
main.addEventListener('click', function (event) {
  main.style.backgroundColor = 'darkgrey';
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
