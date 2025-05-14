const footerDiv = document.querySelector('#footer');
let footerContent = `<p>&copy; 2025 Greg Siekman &bull; <a href="privacy.html" rel="noopener noreferrer">Privacy Policy</a></p>`;

var path = window.location.pathname;
var page = path.split("/").pop();

if(page == 'privacy.html' || page == 'privacy') {
    footerContent = `<p>&copy; 2025 Greg Siekman &bull; <a href="index.html" rel="noopener noreferrer">Home</a></p>`;
}

footerDiv.innerHTML = `${footerContent}`;