//== Variables ==//

var hamburgerIcon = document.querySelector('#hamburger-icon');
var closeIcon = document.querySelector('#close-icon');
var navOverlay = document.querySelector('#nav-overlay');
var logoText = document.querySelector('#logo-text');

//== Functions ==//

// Mobile menu toggle
function menuToggle(event) {
  // Bail if click is NOT on hamburger or close icons
  if (event.target !== hamburgerIcon && event.target !== closeIcon) return;
  // If click is on hamburger icon, show menu items & change logo text to white
  if (event.target == hamburgerIcon) {
    navOverlay.style.height = '100%';
    logoText.style.fill = '#fff';
  }
  // If click is on close icon, hide menu items & return logo text to default color
  if (event.target == closeIcon) {
    navOverlay.style.height = '0%';
    logoText.style.fill = 'initial';
  }
}

//== Event Listeners ==//

// Listen for click events on document
document.addEventListener('click', menuToggle, false);
