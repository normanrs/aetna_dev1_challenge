const express = require('express')
const openWeather = require('./lib/openWeather')

const app = express();
const port = 3000;

app.get('/local/:zipcode', (req, res, next) => {
    openWeather.getLocal(req, res, next)
});

module.exports = app.listen(port, () => console.log(`Listening on port ${port}`))
