const assert = require('power-assert');
const src = require('../src/definitions.js');

describe('Test program is running...', () => {
    it('Addition', () => {
        assert.equal(src.add(1, 2),3);
    });
    it('Subtraction', () => {
        assert.equal(src.sub(1, 1),0);
        assert.equal(src.sub(3, 2),1);
    });
    it('Multiplication', () => {
        assert.equal(src.mul(2, 3),6);
        assert.equal(src.mul(5, 7),35);
        assert.equal(src.mul(11, 11),121);
    });
    it('Division', () => {
        assert(src.div(1, 1)[0]===1 && src.div(1,1)[1]===0);
        assert(src.div(10, 3)[0]===3 && src.div(10,3)[1]===1);
        assert(src.div(24, 5)[0]===4 && src.div(24,5)[1]===4);
        assert(src.div(100, 7)[0]===14 && src.div(100,7)[1]===2);
    });
});