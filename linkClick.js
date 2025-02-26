if (window.matchMedia("(pointer: fine)").matches) {
     window.addEventListener('pageshow', function(event) {
            const link = querySelectorAll('links-menu div');
            hoverElements.forEach(function(element) {
                element.classList.remove('hover');
            });
        });