const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});





/*

const express = require('express');
const server = express();

server.get('/', function(req, res));

//create an Express or Node server and handle the route indicated in the form and print the name, email and comment in the appropriate page

const http = require('http');
const hostname ='127.0.0.1';
const port =3000;
const server = http.createServer((req, res)=>{
  res.statusCode =200;
  res.setHeader('Content-Type','text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname,()=>{
  console.log(`Server running at http://${hostname}:${port}/`);
  });

*/
