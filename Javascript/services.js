//HTTP Service Module
const http = require('http');

//File System Modules
const fileSystem = require('fs')

//My Modules
var date = require('./Modules/getDate.js');

//Setting up local web server
const hostname = '127.0.0.1'; // [Localhost]
const port = 3000; //Arbitrary port

// Creating server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  //Testing module functionality
  res.write("The date and time are currently: " + date.myDateTime() + "\n");
  //Testing request query
  res.write("Request: " + req.url + "\n")
  if(req.url == "/weed") {
  	res.write("Fuck off Ricky!!! \n");
  }
  res.end('Hello World\n');
});

//Logging to console at every request
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
