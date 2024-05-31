function calculateVolume(radius) {
    if (radius < 0) {
        throw new Error("Radius cannot be negative");
    }
    const volume = (4/3) * Math.PI * Math.pow(radius, 3);
    return volume;
}

module.exports = { calculateVolume };
