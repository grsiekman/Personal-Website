const metaTheme = document.querySelector('meta[name="theme-color"]');

function setThemeColor() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        metaTheme.setAttribute('content', '#273745');
    } else {
        metaTheme.setAttribute('content', '#415b74');
    }
}

setThemeColor();