const express = require('express');
const app = express();
const port = 3000;

app.get('/hello-world', (req, res) => {
    res.send('Hello, World!');
});

app.get('*', (req, res) => {
    res.redirect('/hello-world');
});

app.all('*', (req, res) => {
    res.status(400).send('Invalid Route Method');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});