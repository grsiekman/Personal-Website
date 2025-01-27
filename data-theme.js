const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

function setThemeBasedOnSystemPreference() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleSwitch.checked = true;
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        toggleSwitch.checked = false;
    }
}

function setThemeColor() {
    document.head.querySelector('meta[property="theme-color"]').content = '--background-color';
}

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
 } else {
    setThemeBasedOnSystemPreference();

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
 }

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}

setThemeColor();
toggleSwitch.addEventListener('change', switchTheme, false);