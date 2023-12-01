let header = document.getElementById('header');
let body = document.querySelector('body');
let heroSection = document.querySelector('.hero-section');

let buttonHeader = document.querySelector('.navbar .button-cta');

header.classList.add('bg-yellow');

window.addEventListener('scroll', function cambioColoreBackground() {
  let scrollPos = window.scrollY || document.documentElement.scrollTop;

  // Altezza della hero section
  let heroSectionHeight = heroSection.clientHeight;

  // Condizione per cambiare colore
  if (scrollPos < heroSectionHeight) {
    header.classList.add('bg-yellow'); // Colore iniziale
    buttonHeader.classList.remove('button-header-scroll');
  } else {
    header.classList.remove('bg-yellow');
    header.style.backgroundColor = '#FFF'; // Colore dopo la hero section
    
    buttonHeader.classList.add('button-header-scroll');
  }
});
