# 🥇 Node Js Guide
Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that allows developers to build scalable, high-performance applications.
Node.js is built on the V8 JavaScript engine, the same engine used by the Google Chrome browser. It uses an event-driven, non-blocking I/O model, which makes it efficient and lightweight. This allows developers to build applications that can handle a large number of concurrent connections with minimal overhead.

<hr/>

[Download Node Js](https://nodejs.org/en/download)

<hr/>

# Node Basic Setup:-
### First if all install node after that install few modules in your node i.e, require, http, express, nodemon, etc.

# Example:-

```
const http = require('http');
 
const hostname = '127.0.0.1';
const port = 3000;
 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```
