if (window.matchMedia("(pointer: fine)").matches) {
    const links = document.querySelectorAll('.link-menu-div');
    const hoverStyle = {
        transform: 'scale(1.06) translateX(-47.5%)',
        transition: 'all .2s',
    };
    const defaultStyle = {
        transform: 'scale(1) translateX(-50%)',
        transition: 'all .2s',
    };
    const clickStyle = {
        transform: 'scale(1) translateX(-50%)',
        transition: 'all .01s',
    };

    links.forEach(link => {
        link.addEventListener("mouseover", () => {
            Object.assign(link.style, hoverStyle);
        });

        link.addEventListener("mouseout", () => {
            Object.assign(link.style, defaultStyle);
        });

        link.addEventListener("mousedown", () => {
            Object.assign(link.style, clickStyle);
        });
    });
}