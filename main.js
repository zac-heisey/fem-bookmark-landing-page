// Toggle mobile menu dropdown
var navOverlay = document.querySelector('#nav-overlay');
var logoText = document.querySelector('#logo-text');

document.addEventListener('click', function(event) {
  // If click is on hamburger icon, show menu items & change logo text to white
  if (event.target.matches('#hamburger-icon')) {
    navOverlay.style.height = '100%';
    logoText.style.fill = '#fff';
  }
  // If click is on close icon, hide menu items & return logo text to default color
  if (event.target.matches('#close-icon')) {
    navOverlay.style.height = '0%';
    logoText.style.fill = 'initial';
  }

}, false);
