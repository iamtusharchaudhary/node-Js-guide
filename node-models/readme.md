# Node Js Models
In Node.js, "models" typically refer to data structures that define the schema or format for storing and managing data in a database. Models are often used in the context of frameworks like Express or Nest.js when building server-side applications, and they usually work with databases such as MongoDB, MySQL, or PostgreSQL.

```

const mongoose = require('mongoose');

// Define a schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const User = mongoose.model('User', userSchema);

```

[Structure of Models](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj)
