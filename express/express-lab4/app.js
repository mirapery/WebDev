// First:
// Bash: npm init -y
// Bash: npm install express

const express = require('express'); // Import Express.js library
const app = express();  // Create an Express application
const port = 3001;

// Callback function for the root endpoint
// Takes parameters req(uest object) and res(ponse object)
// The res.send() method send the response "Hello" back to the client
const handleRootRequest = (req, res) => {
    res.send('Hello World!');
};

// Callback function for when the server starts listening
const handleServerListening = () => {
    console.log(`Example app listening on port ${port}`);
};

// Registering routes with the callback functions
// Define a route for hanling HTTP GET requests to the root URL
// When a GET request is made to this route, Express executes the callback function
app.get('/', handleRootRequest);
// Better to use the anonymous functions:
//app.get('/', (req, res) => {
//    res.send('Hello World!');
//});

// Starting the server and listening on port 3001
// Once the server is running the callback function is called to log a message to the console
app.listen(port, handleServerListening);
// Better to use anonymous functions:
//app.listen(port, () => {
//    console.log(`Example app listening on port ${port}`);
//});


// Run node app in the bash
// ctrl + c to end