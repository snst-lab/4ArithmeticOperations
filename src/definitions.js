/**
 * @int _add(int a,int b) : a+b (longhand) 
 */
function _add(a, b) {
	while (b) {
		var carry = (a & b) << 1;
		var xor = a ^ b;
		a = xor;
		b = carry;
	}
	return a;
}
/**
 * @int add(int a,int b) : a+b (shorthand) 
 */
const add = (a, b) => (a & b) << 1 ? add(a ^ b, (a & b) << 1) : a ^ b;


//-------------------------------------------------------

/**
 * @int _sub(int a,int b) : a-b (longhand) 
 */
function _sub(a, b) {
	while (b) {
		var carry = (~a & b) << 1;
		var xor = a ^ b;
		a = xor;
		b = carry;
	}
	return a;
}
/**
 * @int sub(int a,int b) : a-b (shorthand)
 */
const sub = (a, b) => add(a, add(~(b), 1));


//-------------------------------------------------------


/**
 * @int _mul(int a,int b) : a*b (longhand)  
 */
function _mul(a, b) {
	var r = 0;
	while (b) {
		if (b & 1) r = add(r, a);
		a = a << 1;
		b = b >> 1;
	}
	return r;
}
/**
 * @int mul(int a,int b) : a*b (shorthand)  
 */
const mul = (a, b, r) => { r = r || 0; return b ? mul(a << 1, b >> 1, b & 1 ? add(r, a) : r) : r; };


//-------------------------------------------------------


/**
 * @int msb(int a) : number of bits
 */
const msb = (a, r) => { r = r || 0; return a ? msb(a >>> 1, add(r, 1)) : r; };

/**
 * @bool more(a,b) : a >= b 
 */
const more = (a, b) => (msb(sub(b, a)) === 32 && msb(b) !== 32) | b === a;

/**
 * @array[int result, int rest]  _div(int a,int b) : a / b  
 */
function div(a, b) {
	let r = 0;
	let s = sub(msb(a), msb(b));
	while(more(a,b)){
		if(more(a, b<<s)){
			a = sub(a, b<<s);
			r = r|(1<<s);
		}
		s = sub(s,1);
	}
	return [r, a];
}

//-------------------------------------------------------

var src = {
	add: function(a,b){return add(a,b);},
	sub: function(a,b){return sub(a,b);},
	mul: function(a,b){return mul(a,b);},
	div: function(a,b){return div(a,b);}
};
module.exports = src;