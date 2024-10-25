
// getRoot function is defined as a callback for handling HTTP GET requests to the root URL
// takes two parameters: req(uest object), res(ponse object)
const getRoot = (req, res) => {
    res.send('I am endpoint get /');
};

// exports an object containing the getRoot function
module.exports = { getRoot };