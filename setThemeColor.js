const themeColorMeta = document.querySelector('meta[name="theme-color"]');
const body = document.body;

function setThemeColor() {
  if (body.classList.contains('dark')) {
    themeColorMeta.content = getComputedStyle(document.documentElement).getPropertyValue('--dark-background-color');
  } else {
    themeColorMeta.content = getComputedStyle(document.documentElement).getPropertyValue('--light-background-color');
  }
}

setThemeColor();