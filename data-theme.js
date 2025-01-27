const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
const metaThemeColor = document.querySelector('meta[name="theme-color"]');


function setThemeBasedOnSystemPreference() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleSwitch.checked = true;
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        toggleSwitch.checked = false;
    }
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
        metaThemeColor.setAttribute('content', '#273745');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        metaThemeColor.setAttribute('content', '#415b74');
        
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);