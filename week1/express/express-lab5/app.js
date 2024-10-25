// Bash: npm init -y
// Bash: npm install express

const express = require("express"); // Imports the Express framework
const app = express();  // Creates an instance of an Express application

// Imports the getRoot function from controllers
const { getRoot } = require('./controllers');

// Defines a route for HTTP GET requests to the root URL
// When a GET request is made to / the getRoot function is used to handle the request and send the response
app.get('/', getRoot);

const port = 3001;

// Starts the server and listens on port 3001
// When the server starts, it logs a message to the console indicating that it is running on which port
app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}`);
});
