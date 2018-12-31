const assert = require('power-assert');
const src = require('../solution/reversePolish.js');

describe('Test program for reversePolish.js is running...', () => {
    it('Main Program', () => {
        assert.equal(src.main('12+3/4*'),4);
    });
});