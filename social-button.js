const socialButton = document.querySelector('#social-menu ul li img');

socialButton.addEventListener('touchstart', () => {
    socialButton.style.filter = 'grayscale(0)';
    socialButton.style.opacity = '100%';
    socialButton.style.transform = 'scale(1.2)';
});

socialButton.addEventListener('touchend', () => {
    setTimeout(() => {
        socialButton.style.filter = 'grayscale(1)';
        socialButton.style.opacity = '75%';
        socialButton.style.transform = 'scale(1)';
    }, 500);
});

window.addEventListener('beforeunload', () => {
    socialButton.style.filter = 'grayscale(1)';
    socialButton.style.opacity = '75%';
    socialButton.style.transform = 'scale(1)';
});