const express = require('express');
const parser = require('body-parser');
const app = express();
const PORT = 8000;

// Send public files to the client
app.use(express.static('server/public'));

// Run server
app.listen(PORT, () => {
    // test server runs
    console.log('Server is listening on port:', PORT);
})

// POST - /equation
app.post('/equation', (req, res) => {
    console.log('Recieved the equation from client');
    // send confirmation status
    res.sendStatus(201);
})