const http = require('http');

const port = 5000;
const server = http.createServer((req,res)=>{
  res.writeHead(200,{'content-type':'text/plain'});
  res.end("Tushar Chaudhary Developer");
})

server.listen(port,()=>{
  console.log(`server running at ${port}`)
})
