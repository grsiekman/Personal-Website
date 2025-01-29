const socialButton = document.querySelector('#social-menu ul li img');

socialButton.addEventListener('click', () => {
	socialButton.classList.add('active');

	setTimeout(() => {
		socialButton.classList.remove('active');
	}, 100);
});