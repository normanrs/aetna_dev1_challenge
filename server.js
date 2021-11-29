const express = require('express')

const app = express();
const port = 3000;

app.get('/hello', (req, res) => {
    res.send('Hellueee World');
});

app.get('/local/:zipcode', (req, res) => {
    res.send(req.params.zipcode);
});

module.exports = app.listen(port, () => console.log(`Listening on port ${port}`))
