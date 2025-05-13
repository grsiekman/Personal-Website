const nametag = document.querySelector('#nametag');

nametag.innerHTML = `
    <h1>Greg Siekman</h1>
    <div class="menu-pill">
        <ul class="site-nav">
            <li class="site-nav-item"><a href="index.html" rel="noopener noreferrer">Home</a></li>
            <li class="site-nav-item"><a href="portfolio.html" rel="noopener noreferrer">Portfolio</a></li>
            <li class="site-nav-item"><a href="privacy.html" rel="noopener noreferrer">Privacy Policy</a></li>
        </ul>
    </div>
`;

document.body.appendChild(nametag.content);

//This needs to be adaptive for the privacy policy page (thinking an if statement could take care of this)
//May be useful to wrap the picture adaptivity into this as well