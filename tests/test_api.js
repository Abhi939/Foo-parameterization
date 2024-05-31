//const { getVolume } = require('./src/api');

const { getVolume } = require('../src/api');
const radius = 5;
const volume = getVolume(radius);
console.log(`Volume of the sphere: ${volume}`);
