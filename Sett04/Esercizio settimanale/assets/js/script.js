let header = document.getElementById('header');
let body = document.querySelector('body');

document.addEventListener('scroll', function () {
  let scrollPos = window.scrollY;

  if (header.scrollTop > 350 || body.scrollTop > 350 ) {
    header.style.backgroundColor = '#FFF';
    header.classList.remove('bg-yellow');
  } else {
    header.classList.remove('bg-scroll');
    header.classList.add('bg-yellow');
  }
});



/* window.onscroll = function cambioColoreBackground () {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        document.getElementById('buttonHeader').classList.add('green');
        document.getElementById('header').classList.add('active');
    } else  {
        document.getElementById('buttonHeader').classList.remove('green');
        document.getElementById('header').classList.remove('active');
    }
} */