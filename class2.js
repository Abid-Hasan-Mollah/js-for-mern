
// What is Node.js?

// Create a basic server with http module

// Use of core modules (fs, path, os)

// npm init, using packages

const http = require('http');

// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello, World!\n');
// }).listen(3000, () => {
//     console.log('Server running at http://localhost:3000/');
// });

const fs = require('fs');
const path = require('path');

fs.writeFile(path.join(__dirname, 'example.txt'), 'Hello, Node.js!', (err) => {
    if (err) throw err;
    console.log('File has been saved!');
});

const filePath = path.join(__dirname, 'demo.txt');
console.log(filePath)

const os = require('os');

console.log('OS Type:', os.type());
console.log('Free Memory:', os.freemem());
