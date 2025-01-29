const socialButton = document.querySelector('#social-menu ul li img');

socialButton.addEventListener('touchstart', () => {
	socialButton.style.setAttribute('filter', 'grayscale(0)');
	socialButton.style.setAttribute('opacity', '100%');
	socialButton.style.setAttribute('transform', 'scale(1.2)');

	setTimeout(() => {
    socialButton.style.setAttribute('filter', 'grayscale(1)');
    socialButton.style.setAttribute('opacity', '75%');
    socialButton.style.setAttribute('transform', 'scale(1)');
}, 500);
});