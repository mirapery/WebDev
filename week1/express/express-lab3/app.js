// More advanced example, where we use functions imported from another file (controller)


const express = require("express");
const app = express();

// Passing functions as arguments
// getroot is a function imported from controller
const { getRoot } = require('./controller1');

// Defining a root
// In Express / is an endpoint wich refers to the specific URL path your server responds to

// Read operations with app.get
// app.get handles read operations
app.get('/', getRoot); // getRoot is used as a callback

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});