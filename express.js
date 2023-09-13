const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');
app.use(express.static(__dirname));
app.all('/:id.png', (req, res) => {
    const id = req.params.id;
    console.log(id + '.png');
    let imagePath = path.join(__dirname, 'images', id + '.png');

    fs.access(imagePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.error(`${id}.png does not exist in the folder.`);
            res.statusCode = 404;
            res.end('<h1>404 Not Found</h1>');
        } else {
            res.setHeader('content-type', 'image/png');
            console.log(imagePath);
            let png = fs.readFileSync(imagePath);
            res.end(png);
        }
    });
});
app.get('/:id.html', (req, res) => {
    const id = req.params.id;
    const folderPath = __dirname;
    const htmlFileName = id + '.html';
    const filePath = path.join(folderPath, htmlFileName);
    
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.error(`${htmlFileName} does not exist in the folder.`);
            res.statusCode = 404;
            res.end('<h1>404 Not Found</h1>');
        } else {
            console.log(`${htmlFileName} exists in the folder.`);
            res.setHeader('content-type', 'text/html;charset=utf8');
            let html = fs.readFileSync(filePath);
            res.end(html);
        }
    });
});

app.get('/:id.css', (req, res) => {
    const id = req.params.id;
    const cssFilePath = path.join(__dirname, id + '.css');

    fs.access(cssFilePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.error(`${id}.css does not exist in the folder.`);
            res.statusCode = 404;
            res.end('<h1>404 Not Found</h1>');
        } else {
            res.setHeader('content-type', 'text/css;charset=utf8');
            let css = fs.readFileSync(cssFilePath);
            res.end(css);
        }
    });
});

app.get('/:id.js', (req, res) => {
    const id = req.params.id;
    const jsFilePath = path.join(__dirname, id + '.js');

    fs.access(jsFilePath, fs.constants.F_OK, (err) => {
        if (err) {
            console.error(`${id}.js does not exist in the folder.`);
            res.statusCode = 404;
            res.end('<h1>404 Not Found</h1>');
        } else {
            res.setHeader('content-type', 'application/javascript;charset=utf8');
            let js = fs.readFileSync(jsFilePath);
            res.end(js);
        }
    });
});


app.listen(3000, () => {
    console.log("Server started!");
});

app.get('/', (req, res) => {
    res.end('home');
});