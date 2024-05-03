const { create } = require('domain');

// create http server

const http = require('http');

const hostname = '127.0.0.1';
const port = 4000;

// create own server

const server = http.createServer((req,res)=>{
  res.writeHead(200,{'content-type':'text/plain'});
  res.end("Tushar Chaudhary Developer");
})
server.listen(port,hostname,()=>{
  console.log(`server running at http://${hostname}:${port}`)
})
