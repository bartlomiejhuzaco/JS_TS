const express = require('express');

require('dotenv').config();

const PORT = process.env.port || 3000;
const app = express();

app.get('/', (request, response) => {
    response.send("Hello it's express.js app!");
});

app.listen(PORT, () => {
    console.log(`Our app is listening on ${PORT} port`)
})

// http://localhost:5000/