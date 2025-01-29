const images = document.querySelectorAll('#social-menu ul li img');

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    images.forEach(image => {
      image.classList.remove('active');
    });
  }
});

images.forEach(image => {
  image.addEventListener('click', () => {
    images.forEach(img => img.classList.remove('active'));
    image.classList.add('active');
  });
});