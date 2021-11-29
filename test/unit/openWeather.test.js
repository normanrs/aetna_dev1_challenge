const {formattedWeather} = require('../../lib/openWeather');
const openWeatherFixture = require('../data/openWeatherLocal.json');

test('should extract formatted weather data from open weather response', () => {
    const testData = formattedWeather(openWeatherFixture)
    expect(testData.city).toEqual('Arvada');
    expect(testData.conditions).toEqual('scattered clouds')
    expect(testData.high_temp).toEqual(74)
    expect(testData.low_temp).toEqual(60)
});
