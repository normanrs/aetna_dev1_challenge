const axios = require('axios')
const openWeatherUrl = 'http://api.openweathermap.org/data/2.5'

function formattedWeather(data) {
    return {
        "city": data?.name,
        "conditions": data?.weather[0]?.description,
        "high_temp": parseInt(data?.main?.temp_max),
        "low_temp": parseInt(data?.main?.temp_min)
    }
}

const getLocal = async (req, res, next) => {
    const path = '/weather'
    const zipCode = req.params.zipcode
    const apiKey = process.env.openWeatherKey
    try {
        const weatherData = await axios.get(`${openWeatherUrl}${path}?zip=${zipCode}&appid=${apiKey}&units=imperial`);
        res.send(formattedWeather(weatherData.data));
    } catch (err) {
        if (err.response.status) {
            res.status(err.response.status)
        }
        next(err)
    }
};

module.exports = {getLocal, formattedWeather};
