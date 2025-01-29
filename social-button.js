const socialButton = document.querySelector('#social-menu ul li img');

socialButton.addEventListener('touchstart', () => {
	setTimeout(() => {
		socialButton.classList.add('active');
	}, 500;)
});

socialButton.addEventListener('touchend', () => {
      image.classList.remove('active');
});