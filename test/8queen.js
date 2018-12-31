const assert = require('power-assert');
const src = require('../solution/8queen.js');

describe('Test program for 8queen.js is running...', () => {
    it('Main Program', () => {
        console.log(src.main(128, 8));
        assert(src.main(128, 8) instanceof Array);
    });
});