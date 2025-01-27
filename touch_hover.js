document.addEventListener('touchstart', function(event) {
  // Get all social media icons
  var icons = document.getElementsByClassName('contact-icon');

  // Loop through all icons and add the touch-hover class on touchstart
  for (var i = 0; i < icons.length; i++) {
    icons[i].classList.add('touch-hover');
  }

  // Add a timeout to remove the touch-hover class after a short delay (e.g., 200ms)
  setTimeout(function() {
    for (var i = 0; i < icons.length; i++) {
      icons[i].classList.remove('touch-hover');
    }
  }, 200);
}, false);