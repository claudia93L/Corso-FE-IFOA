const ball = document.getElementById('palla');

function addPoints() {
  const score = document.getElementById('number');
  let points = 0;

  return function () {
    points++;
    ball.style.opacity = 0;
    score.innerText = points;
  };
}

const getPoints = addPoints();

function startGame() {
  const welcome = document.getElementById('welcome');

  welcome.style.display = 'none';
  ball.classList.remove('d-none');
  moveBallY();
}

function getRandomXPosition() {
  // Ottieni la larghezza della finestra e genera una posizione X casuale
  const screenWidth = window.innerWidth;
  const randomPx = Math.random() * screenWidth;
  return randomPx;
}

function moveBallX() {
  const randomPx = getRandomXPosition();
  ball.style.transform = `translateX(${randomPx}px)`;
}

function moveBallY() {
  ball.animate(
    [
      // key frames
      { transform: 'translateY(-150px)' },
      { transform: 'translateY(100vh)' },
    ],
    {
      duration: 1000,
      iterations: Infinity,
    }
  );
}

window.onload = function () {
  moveBallX();
};
