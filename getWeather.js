var getWeather = require('./weatherReader.js')('Maryville, Missouri');
var noaa = require('./weatherReader2.js');
noaa.getTemp('Maryville, MO');
noaa.getHumidity('Maryville, MO');
