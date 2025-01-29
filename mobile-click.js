const images = document.querySelectorAll('#social-menu ul li img');

images.forEach(image => {
  image.addEventListener('click', () => {
    images.forEach(img => img.classList.remove('active'));
    image.classList.add('active');

    setTimeout(() => {
      image.classList.remove('active');
    }, 300);
  });
});