const assert = require('power-assert');
const src = require('../solution/reversePolish.js');

describe('Test program for reversePolish.js is running...', () => {
    it('Main Program', () => {
        //(1+2)/3*4 -> 12+3/4*
        
        console.log(src.main('12+3/4*'));
        assert.equal(src.main('12+3/4*'),4);

        console.log(src.main2('12+3/4*'));
        assert.equal(src.main2('12+3/4*'),4);
    });
});