
var arguments = process.argv.slice(2);

var riot = require('riot');

var tag = require(arguments[0]);
lat = arguments[1];
lon = arguments[2];

var html = riot.render(tag, { lat: lat, lon: lon });

console.log(html);