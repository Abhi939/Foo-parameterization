const { calculateVolume } = require('./core');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the radius of the sphere: ', (answer) => {
    const radius = parseFloat(answer);
    try {
        const volume = calculateVolume(radius);
        console.log(`Volume of the sphere: ${volume}`);
    } catch (error) {
        console.error(error.message);
    }
    rl.close();
});
