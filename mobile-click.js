const images = document.querySelectorAll('#social-menu ul li img');

window.addEventListener('pageshow', () => {
  images.forEach(image => {
    image.classList.remove('active');
  });
});

images.forEach(image => {
  image.addEventListener('click', () => {
    images.forEach(img => img.classList.remove('active'));
    image.classList.add('active');
  });
});