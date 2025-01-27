document.addEventListener('click', function(event) {
  // Check if the clicked element is a social media icon
  if (event.target.matches('.content-icon')) {
    // Get all social media icons
    var icons = document.getElementsByClassName('content-icon');

    // Loop through all icons and add the touch-hover class on click
    for (var i = 0; i < icons.length; i++) {
      icons[i].classList.add('touch-hover');

      // Remove the touch-hover class after a short delay
      setTimeout(function() {
        icons[i].classList.remove('touch-hover');
      }, 200);
    }
  }
}, false);