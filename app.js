//Imports
const bodyParser = require('body-parser');
const express = require('express');

//Express Attributes
const app = express();
const port = 3000;

//Middleware
app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

//Function Definitions
function processInput(userInput) {
    console.log(`User Input: ${userInput}`);
    return ("Input Received");
}

//Routes
app.post('/submit', (req, res) => {
    console.log(req.body);
    res.send(processInput(req.body.userInput));
});

//Express Server Config
app.listen(port, () => console.log(`Example app listening on port ${port}!`));