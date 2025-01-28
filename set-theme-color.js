function setThemeColorBasedOnSystemPreferences() {
  // Check if the user has a preference for a light or dark color scheme
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // If the user prefers a dark color scheme, set the meta theme-color to a dark color
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#273745');
  } else {
    // If the user prefers a light color scheme or doesn't have a preference, set the meta theme-color to a light color
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '#415b74');
  }
}

// Call the function to set the meta theme-color based on the user's system preferences
setThemeColorBasedOnSystemPreferences();