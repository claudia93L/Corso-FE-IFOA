/* let sound = new Audio(boom.wav); */
let play = true;
let points = 0;
let chosenLevel = 'easy';
let levels = {
  easy: 20,
  medium: 40,
  hard: 60,
};

const levelSelector = document.getElementById('level');
levelSelector.onchange = () => {
  chosenLevel = levelSelector.value;
  clearGrid();
  createBombs();
};

function createGrid() {
  const box = document.getElementById('mainDiv');

  for (let i = 0; i < 100; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    // mettiamo this, perchè così gli passiamo l'evento del click del mouse
    square.setAttribute('onclick', 'step(this)');
    box.appendChild(square);
  }
  createBombs();
}

function createBombs() {
  let squares = document.querySelectorAll('.square');

  squares.forEach((element) => {
    element.classList.remove('bomb');
  });

  for (let i = 0; i <= levels[chosenLevel]; i++) {
    let casual = Math.floor(Math.random() * 100);
    squares[casual].classList.add('bomb');
  }
}

function step(element) {
  if (
    !element.classList.contains('bomb') &&
    !element.classList.contains('clicked') &&
    play == true
  ) {
    element.classList.add('good', 'clicked');
    points++;
    document.getElementById('points').innerText = points;
  } else if (element.classList.contains('bomb') && play == true) {
    element.classList.add('exploded');
    /* sound.play(); */
    play = false;
    document.getElementById('gameOver').style.opacity = '1';
  }
}

function clearGrid() {
  const box = (document.getElementById('mainDiv').innerHTML = '');
  play = 1;
  points = 0;
  document.getElementById('points').innerText = '';
  document.getElementById('gameOver').style.opacity = '0';
  createGrid();
}

createGrid();
