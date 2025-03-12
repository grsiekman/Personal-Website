if (window.matchMedia("(pointer: coarse)").matches) {
    const socialButtons = document.querySelectorAll('#social-menu ul li img');

    socialButtons.forEach(socialButton => {
        socialButton.addEventListener('pointerdown', () => {
            socialButton.style.filter = 'grayscale(0)';
            socialButton.style.opacity = '100%';
            socialButton.style.transform = 'scale(1.2)';
        });

        socialButton.addEventListener('pointerup', () => {
            setTimeout(() => {
                socialButton.style.filter = 'grayscale(1)';
                socialButton.style.opacity = '75%';
                socialButton.style.transform = 'scale(1)';
            }, 500);
        });

        socialButton.addEventListener('blur', () => {
            socialButton.style.filter = 'grayscale(1)';
            socialButton.style.opacity = '75%';
            socialButton.style.transform = 'scale(1)';
        });
    });

    // Add an event listener for visibility change to reset styles when returning to the page
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
            socialButtons.forEach(socialButton => {
                socialButton.style.filter = 'grayscale(1)';
                socialButton.style.opacity = '75%';
                socialButton.style.transform = 'scale(1)';
            });
        }
    });

    // Add an event listener for beforeunload to reset styles
    window.addEventListener('beforeunload', () => {
        socialButtons.forEach(socialButton => {
            socialButton.style.filter = 'grayscale(1)';
            socialButton.style.opacity = '75%';
            socialButton.style.transform = 'scale(1)';
        });
    });
}