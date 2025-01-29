const images = document.querySelectorAll('#social-menu ul li img');
let isImageClicked = false;

window.addEventListener('focus', () => {
  if (!isImageClicked) {
    images.forEach(image => {
      image.classList.remove('active');
    });
  }
  isImageClicked = false;
});

images.forEach(image => {
  image.addEventListener('click', () => {
    isImageClicked = true;
    images.forEach(img => img.classList.remove('active'));
    image.classList.add('active');
  });

  // Workaround for Safari on iOS
  image.addEventListener('touchstart', () => {
    isImageClicked = true;
    images.forEach(img => img.classList.remove('active'));
    image.classList.add('active');
  });
});