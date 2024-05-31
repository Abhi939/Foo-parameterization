// src/index.js

const { calculateVolume } = require('./core');
const { getVolume } = require('./api');

// Export the functions for external use

module.exports = {
    calculateVolume,
    getVolume
};
