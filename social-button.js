const socialButton = document.querySelector('#social-menu ul li img');

socialButton.addEventListener('touchstart', () => {
	socialButton.classList.add('active');
});

socialButton.addEventListener('touchend', () => {
	socialButton.classList.remove('active');
});