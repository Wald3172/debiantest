const express = require('express');
const PORT = 5000;

// express application creation
const app = express();

// routes

app.use('/start', (req, res) => {
    res.send('Start page!!!')
});

// start app (listen port and DB connection)
const startApp = () => {
    try {
        app.listen(PORT, () => console.log(`--- App is working on port: ${PORT}`));
    } catch (error) {
        console.log(`--- Connection error: ${error}`);
    }
}

startApp();
