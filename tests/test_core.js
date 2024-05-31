const { calculateVolume } = require('../src/core');
const assert = require('assert');



describe('calculateVolume', function() {
    it('should return correct volume for a given radius', function() {
        assert.strictEqual(calculateVolume(1), 4.1887902047863905);
    });

    it('should return 0 for radius 0', function() {
        assert.strictEqual(calculateVolume(0), 0);
    });

    it('should throw an error for negative radius', function() {
        assert.throws(() => calculateVolume(-1), /Radius cannot be negative/);
    });
   
});


