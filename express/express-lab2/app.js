// In this example, we initialize Express and set up a basic server

const express = require('express');
const app = express();  // Function Expression: function that creates an instance of an Express application
const port = 3000;

// Setting up a route with callbacks
// app.get defines a route for handling GET requests to the root url /
// the rest is a callback function that processes incoming requests and sends a response back to the client
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Starting the server
// app.listen starts the server and listens for incoming connections from port 3000
// the rest is a callback function that executes once the server is up and running, providing a message that confirms the server is operational
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});