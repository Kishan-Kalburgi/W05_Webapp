// invoke single function directly
require('./weatherReader.js')('Maryville, Missouri');

// invoke single function
var noah = require('./weatherReader.js');
noah('Maryville, Missouri');

// invoke object with multiple functions
var noaa = require('./weatherReader2.js');
noaa.getTemp('Maryville, MO');
noaa.getHumidity('Maryville, MO');
