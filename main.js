//== Variables ==//

// Menu Icon
var menuIcon = document.querySelector('#menu-icon');
// Nav Overlay
var navOverlay = document.querySelector('#nav-overlay');
// SVG Logo Text
var logoText = document.querySelector('.logo-text');
// Feature Tabs (NodeList)
var featureTabs = document.querySelectorAll('[data-tab]');
// FAQ Details (NodeList)
var details = document.querySelectorAll('details');
// Email input field
var emailInput = document.querySelector('input[type="email"]');
// Form submit button
var emailSubmit = document.querySelector('input[type="submit"]');

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
  for (tab of featureTabs) {
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

// Details toggle
function detailsToggle(event) {

  // Loop through details elements
  for (detail of details) {
    /* Remove open attribute from non-clicked detail elements */
    if (detail !== event.target.parentElement && detail.hasAttribute('open')) {
      detail.removeAttribute('open');
    }
  }

}

// Form validation warning
function formValidation() {

  // Reset input field warnings
  emailInput.classList.remove('show-warning');
  emailInput.nextElementSibling.style.display = 'none';

  // If email input field does not contain @ or . symbols
  if (!emailInput.value.includes('@' && '.')) {
    // Show the associated warning message
    emailInput.classList.add('show-warning');
    emailInput.nextElementSibling.style.display = 'block';
  }

  // Prevent default form submission behavior
  event.preventDefault();

}

//== Event Listeners ==//

// Listen for click events on document
document.addEventListener('click', function(event) {

  // If click is on menu icon, run menuToggle function
  if (event.target === menuIcon) {
    menuToggle(event);
  }
  // If click is on an FAQ detail, run detailsToggle function
  if (event.target.matches('summary')) {
    detailsToggle(event);
  }
  // If click is on submit button, run formValidation function
  if (event.target === emailSubmit) {
    formValidation(event);
  }


}, false);
// Listen for hashchange event on window
window.addEventListener('hashchange', featureTabsToggle, false);
// Listen for page load event on window
window.addEventListener('load', featureTabsToggle, false);
