const express = require('express');
const parser = require('body-parser');
const app = express();
const PORT = 8000;

app.use(express.static('server/public'));

app.listen(PORT, () => {
    // test server runs
    console.log('Server is listening on port:', PORT);
})