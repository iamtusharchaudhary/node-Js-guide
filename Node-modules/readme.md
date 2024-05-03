# Node Modules:-
Modules are the blocks of encapsulated code that communicate with an external application on the basis of their related functionality. Modules can be a single file or a collection of multiple files/folders. A set of functions you want to include in your application.

# Node Js Modules are:-
<ul>
  <li>Core Modules</li>
  <li>Local Modules</li>
  <li>Third-Party Modules</li>
</ul>

# Core Modules of Node Js:-

> http

> fs

> assert

> path

> process

> os

> querystring

> url

# Local Modules of Node Js:-
Local module must be written in a separate JavaScript file. In the separate file, we can declare a JavaScript object with different properties and methods. 

```
In this local modules are, sayHello, currTime, companyName

const welcome = {

	sayHello: function () {
		console.log("Hello GeekforGeeks user");
	},

	currTime: new Date().toLocaleDateString(),

	companyName: "GeekforGeeks"
}

module.exports = welcome
```

# Third-Party Modules of Node Js:-
Third-party modules are modules that are available online using the Node Package Manager(NPM). These modules can be installed in the project folder or globally. Some of the popular third-party modules are Mongoose, express, angular, and React. 

### Example:-
<ul>
  <li>npm install express</li>
  <li>npm install mongoose</li>
  <li>npm install -g @angular/cli</li>
  <li>npm install react</li>
</ul>
