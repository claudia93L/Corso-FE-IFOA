let header = document.getElementById('site-header-inner');

document.addEventListener('scroll', function () {
  // Get the scroll position
  let scrollPos = window.scrollY;

  if (scrollPos > 100) {
    header.style.backgroundColor = 'var(--primary-color)';
  } else {
    header.style.backgroundColor = '#FFF';
  }
});
