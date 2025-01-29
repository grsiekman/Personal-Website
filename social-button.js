const socialButton = document.querySelector('#social-menu ul li img');

socialButton.addEventListener('touchend', () => {
	socialButton.classList.add('active');

	setTimeout(() => {
    socialButton.classList.remove('active');
}, 500);
});