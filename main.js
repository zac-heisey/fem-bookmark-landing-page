//== Variables ==//

// Menu Icon
var menuIcon = document.querySelector('#menu-icon');
// Nav Overlay
var navOverlay = document.querySelector('#nav-overlay');
// SVG Logo Text
var logoText = document.querySelector('#logo-text');
// Feature Tabs (NodeList)
var featureTabs = document.querySelectorAll('[data-tab]');

//== Functions ==//

// Mobile menu toggle
function menuToggle(event) {

  // If menu is not open, show menu items & change logo text to white
  if (!menuIcon.classList.contains('open')) {
    menuIcon.classList.add('open');
    menuIcon.setAttribute('aria-expanded', 'true');
    navOverlay.style.height = '100%';
    logoText.style.fill = '#fff';
  // Else close menu and return logo text to default
  } else {
    menuIcon.classList.remove('open');
    menuIcon.setAttribute('aria-expanded', 'false');
    navOverlay.style.height = '0%';
    logoText.style.fill = 'initial';
  }

}

// Feature tabs toggle
function featureTabsToggle(event) {

  // Get current value of hash (minus the #)
  var hash = window.location.hash.substring(1);

  // Loop through feature tabs
  for (var tab of featureTabs) {
    // Remove active class from any feature tabs
    if (tab.classList.contains('active')) {
      tab.classList.remove('active');
    }
    // If hash is blank, make first feature tab active (initial state)
    if (hash === '' && tab.getAttribute('data-tab') === 'bookmarking') {
      tab.classList.add('active');
    }
    // If [data-tab] attribute value matches hash value, add active class
    if (tab.getAttribute('data-tab') === hash) {
      tab.classList.add('active');
    }
  }

}

//== Event Listeners ==//

// Listen for click events on menu icon
menuIcon.addEventListener('click', menuToggle, false);
// Listen for hashchange event on window
window.addEventListener('hashchange', featureTabsToggle, false);
// Listen for page load event on window
window.addEventListener('load', featureTabsToggle, false);
