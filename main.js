const express = require('express');

require('dotenv').config();

const PORT = process.env.port || 3000;
const app = express();

const usersRouter = require('./router/users');

app.use("/users", usersRouter);

app.listen(PORT, () => {
    console.log(`Our app is listening on ${PORT} port`)
})

// http://localhost:5000/