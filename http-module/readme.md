# HTTP Module
Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP). To make HTTP requests in Node.js, there is a built-in module HTTP in Node.js to transfer data over the HTTP. To use the HTTP server in the node, we need to require the HTTP module. The HTTP module creates an HTTP server that listens to server ports and gives a response back to the client.

#### To include the HTTP module, use the require() method:

> const http = require('http');

# Example:-

```
const http = require('http');

const port = 5000;
const server = http.createServer((req,res)=>{
  res.writeHead(200,{'content-type':'text/plain'});
  res.end("Tushar Chaudhary Developer");
})

server.listen(port,()=>{
  console.log(`server running at ${port}`)
})

```
