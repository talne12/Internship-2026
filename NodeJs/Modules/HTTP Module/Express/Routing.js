const express = require('express');
const app = express();
const port = 7000;

app.get('/', (req, res) => {
    res.send('Hello, welcome to the Express.js server!');
});

app.get('/Home', (req, res) => {
    res.send("This is Home Page");
});

app.get('/About', (req, res) => {
    res.send("This is About Page");
});

app.get('/Contact', (req, res) => {
    res.send("This is Contact Page");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});