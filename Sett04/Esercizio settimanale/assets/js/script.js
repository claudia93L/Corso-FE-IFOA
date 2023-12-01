let header = document.getElementById('header');
let body = document.querySelector('body');
let heroSection = document.querySelector('.hero-section');

header.classList.add('bg-yellow');

window.addEventListener('scroll', function cambioColoreBackground() {
  let scrollPos = window.scrollY || document.documentElement.scrollTop;

  // Altezza della hero section
  let heroSectionHeight = heroSection.clientHeight;

  // Condizione per cambiare colore
  if (scrollPos < heroSectionHeight) {
    header.classList.add('bg-yellow'); // Colore iniziale
  } else {
    header.classList.remove('bg-yellow');
    header.style.backgroundColor = '#FFF'; // Colore dopo la hero section
  }
});
