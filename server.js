const express = require('express')

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hellueee World');
});

app.get('/local/:zipcode', (req, res) => {
    console.log(req.params.zipcode);
    res.send(req.params.zipcode);
});

app.listen(port, () => console.log(`Listening on port ${port}`))
