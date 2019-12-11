//== Variables ==//

var menuIcon = document.querySelector('#menu-icon');
var navOverlay = document.querySelector('#nav-overlay');
var logoText = document.querySelector('#logo-text');

//== Functions ==//

// Mobile menu toggle
function menuToggle(event) {

  // If menu is not open, show menu items & change logo text to white
  if (!menuIcon.classList.contains('open')) {
    menuIcon.classList.add('open');
    navOverlay.style.height = '100%';
    logoText.style.fill = '#fff';
  // Else close menu and return logo text to default  
  } else {
    menuIcon.classList.remove('open');
    navOverlay.style.height = '0%';
    logoText.style.fill = 'initial';
  }

}

//== Event Listeners ==//

// Listen for click events on menu icon
menuIcon.addEventListener('click', menuToggle, false);
