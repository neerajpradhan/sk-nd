const http = require('http');
const {readFileSync} = require('fs');

const homePage = readFileSync('./navbar-app/index.html');
const homeLogo = readFileSync('./navbar-app/logo.svg');
const homeStyle = readFileSync('./navbar-app/styles.css');
const homeLogic = readFileSync('./navbar-app/browser-app.js');
const favIcon = readFileSync('./favicon.ico');

const server = http.createServer((req, res) => {
    // console.log(req.url);
    const url = req.url;
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(homePage)
    }else if (url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(homeStyle)
    }else if (url === '/browser-app.js') {
        res.writeHead(200, { 'content-type': 'text/js' })
        res.write(homeLogic)
    }else if (url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'image/svg+xml' })
        res.write(homeLogo)
    } else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1 style="padding:1rem;text-align: center;">About Page</h1>')
    }  else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1 style="padding:1rem;text-align: center;">Page not found</h1>')
    }
    res.end();
})

server.listen(5000)