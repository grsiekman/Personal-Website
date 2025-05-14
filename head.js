const head = document.querySelector('head');
let pageInfo =
    `<title>Home - Greg Siekman</title>
    <meta name="description" content="Personal Website of Greg Siekman">`;

var path = window.location.pathname;
var page = path.split("/").pop();

if(page == "portfolio.html") {
    pageInfo = 
    `<title>Portfolio - Greg Siekman</title>
    <meta name="description" content="Privacy Policy for the website of Greg Siekman">`;
} else if (page == "privacy.html") {
    pageInfo = 
    `<title>Privacy Policy - Greg Siekman</title>
    <meta name="description" content="Greg Siekman's Portfolio">`;
} else if (page == "links.html") {
    pageInfo = 
    `<title>Links - Greg Siekman</title>
    <meta name="description" content="Greg Siekman's Social Media Links">`;
}

head.insertAdjacentHTML("beforeend", `
    ${pageInfo}
    <meta charset="UTF-8">
    <meta name="keywords" content="Greg Siekman, Siekman, siekmang, Greg Siekman Maine">
    <meta name="author" content="Greg Siekman">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lora:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet">
    <meta property="og:image" content="sharepic.jpg">
    <meta property="og:image:type" content="image/jpg">
    <meta property="og:image:width" content="1080">
    <meta property="og:image:height" content="718">
    <meta property="og:image:alt" content="Lanscape photo of a body of water and fall trees">
    <link rel="icon" type="image/png" href="favicon/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/svg+xml" href="favicon/favicon.svg" />
    <link rel="shortcut icon" href="favicon/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
    <meta name="apple-mobile-web-app-title" content="Greg Siekman" />
    <link rel="manifest" href="favicon/site.webmanifest" />
    <meta name="theme-color" content="#ffffff" />
    <meta http-equiv="Permissions-Policy" content="interest-cohort=()">
`);