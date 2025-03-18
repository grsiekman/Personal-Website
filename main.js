// These variables are for the theme handling
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
const metaThemeColor = document.querySelector('meta[name="theme-color"]');
const dismissButton = document.querySelector('#popup-dismiss-button');
const DARK_THEME_COLOR = '#273745';
const LIGHT_THEME_COLOR = '#415b74';

// This function sets the website theme based on system preferences
function setThemeBasedOnSystemPreference() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        metaThemeColor.setAttribute('content', DARK_THEME_COLOR);
        toggleSwitch.checked = true;
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        metaThemeColor.setAttribute('content', LIGHT_THEME_COLOR);
        toggleSwitch.checked = false;
    }
}

// This checks for contents in the currentTheme const, sets data-theme if there is, and calls
// the system preference function if not. Sets switch to on if dark mode is on.
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
} else {
    setThemeBasedOnSystemPreference();
}

// This function controls the privacy alert popup, allowing it to pop up only the first time 
// the user clicks the switch
function privacyPopup() {
    const clickHistory = localStorage.getItem('clickHist');
    if (clickHistory === null) {
        document.querySelector('#popup').style.display = 'unset';
        try {
            localStorage.setItem('clickHist', 'clicked');
        } catch (e) {
            console.error('LocalStorage is not available:', e);
        }
    }
}

// This function is to switch the theme
function switchTheme(e) {
    privacyPopup();
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        try {
            localStorage.setItem('theme', 'dark');
        } catch (e) {
            console.error('LocalStorage is not available:', e);
        }
        metaThemeColor.setAttribute('content', DARK_THEME_COLOR);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        try {
            localStorage.setItem('theme', 'light');
        } catch (e) {
            console.error('LocalStorage is not available:', e);
        }
        metaThemeColor.setAttribute('content', LIGHT_THEME_COLOR);
    }
}

// This looks for a switch click and triggers the setTheme function
if (toggleSwitch) {
    toggleSwitch.addEventListener('change', switchTheme, false);
}

// This function sets the privacy popup display to none
function buttonClick(event) {
    document.querySelector('#popup').style.display = 'none';
}

// This checks for a click on the dismiss button on the privacy popup and triggers the
// buttonClick function to make the privacy popup disappear
if (dismissButton) {
    dismissButton.addEventListener('click', buttonClick, false);
}

// This section handles touchscreen behavior for the social buttons on the homepage. 
if (window.matchMedia("(pointer: coarse)").matches) {
    const socialButtons = document.querySelectorAll('#social-menu ul li img');

    // This handles click-like behavior for the styling of buttons
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

    // This resets the style when the user returns from a tab
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
            socialButtons.forEach(socialButton => {
                socialButton.style.filter = 'grayscale(1)';
                socialButton.style.opacity = '75%';
                socialButton.style.transform = 'scale(1)';
            });
        }
    });

    // This resets the style when the user leaves the tab
    window.addEventListener('beforeunload', () => {
        socialButtons.forEach(socialButton => {
            socialButton.style.filter = 'grayscale(1)';
            socialButton.style.opacity = '75%';
            socialButton.style.transform = 'scale(1)';
        });
    });
}

// This is handling local storage opt-out, checking for a local storage items that 
// are created by the site and erasing them after users click the text on the privacy page
// indicating they want to opt out of local storage
document.addEventListener('DOMContentLoaded', function() {
    function storageWipe(event) {
        if(localStorage.getItem('theme') || localStorage.getItem('clickHist')) {
            localStorage.removeItem('theme');
            localStorage.removeItem('clickHist');
            // Display a popup that history was cleared.
            alert('Local storage history cleared.');
        } else {
            alert('No theme or click history data in Local Storage.');
        }
    }

    document.querySelector('#lsWipe').addEventListener('click', storageWipe, false);
});

// These are variables for the below functions that handle link buttons on the links page.
const links = document.querySelectorAll('.link-menu-div');
const linksSub = document.querySelectorAll('.link-submenu-div');

// This handles button behavior on my links page. The first if checks for
// the user using a device with a fine poiner(not a touchscreen device), and then sets
// some constants.
if (window.matchMedia("(pointer: fine)").matches) {
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

// This is where it listens for different mouse events and changes
// style based on those events
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

    linksSub.forEach(link => {
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

const linksMore = document.getElementById('links-more-button');
const linksMoreDiv = document.getElementById('link-more');

linksMoreDiv.style.display = 'none';

linksMore.addEventListener('pointerdown', () => {
    const currentScroll = window.scrollY; // Get current scroll position

    if (linksMoreDiv.style.display === 'none') {
        linksMoreDiv.style.display = 'grid';
        linksMore.innerHTML = '<p>Less ↑</p>';
    } else {
        linksMoreDiv.style.display = 'none';
        linksMore.innerHTML = '<p>More ↓</p>';
        window.scrollTo({ top: currentScroll, behavior: 'smooth' }); // Smoothly adjust scroll
    }
});