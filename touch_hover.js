document.addEventListener('touchend', function(event) {
  // Get all social media icons
  var icons = document.getElementsByClassName('social-media-icon');

  // Loop through all icons and add the touch-hover class on touchend
  for (var i = 0; i < icons.length; i++) {
    icons[i].classList.add('touch-hover');

    // Remove the touch-hover class after a short delay
    setTimeout(function() {
      icons[i].classList.remove('touch-hover');
    }, 200);
  }
}, false);