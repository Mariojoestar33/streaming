const express = require('express');
const app = express();
const fs = require('fs');
const http = require('http');
const host = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/html' });

    fs.readFile('public/index.html', (err, data) => {
    
        if (err) {
        
            res.writeHead(404);
            res.write('File not found!');
        
        } else {
        
            res.write(data);
        
        }

        res.end();

    });

});

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});