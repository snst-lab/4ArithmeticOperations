var src = {
	/**
	 * @Solution 1 : using eval
	 */
	main: function (str) {
		try {
			if (str.match(/[^0-9\+\-\*\/]/)) throw 'An invalid character is contained.';
			var a = str.split('');
			var l = a.length;
			var i = 0;
			while (i < l) {
				if (/[\+\-\/\*]/.test(a[i])) {
					if (!a[i - 2] + ''.match(/^[-]?([0-9\d]){1}$/) || !a[i] + ''.match(/[\+\-\*\/]{1}/) || !a[i - 1] + ''.match(/^[-]?([0-9\d]){1}$/)) throw 'Syntax Error.';
					a[i] = (0, eval)(a[i - 2] + a[i] + a[i - 1]);
					a.splice(i - 2, 2);
					i = i - 1;
					l = l - 2;
				} else {
					i = i + 1;
				}
			}
			return a[a.length - 1];

		} catch (e) {
			return e;
		}
	},
	/**
	 * @Solution 2 : not using eval
	 */
	main2: function (str) {
		try {
			if (str.match(/[^0-9\+\-\*\/]/)) throw 'An invalid character is contained.';

			var a = str.split('');
			var l = a.length;
			var i = 0;
			while (i < l) {
				if (/[\+\-\/\*]/.test(a[i])) {
					if (!a[i - 2] + ''.match(/^[-]?([0-9\d]){1}$/) || !a[i] + ''.match(/[\+\-\*\/]{1}/) || !a[i - 1] + ''.match(/^[-]?([0-9\d]){1}$/)) throw 'Syntax Error.';
					switch (a[i]) {
						case '+':
							a[i] = +a[i - 2] + +a[i - 1];
							break;
						case '-':
							a[i] = +a[i - 2] - +a[i - 1];
							break;
						case '*':
							a[i] = +a[i - 2] * +a[i - 1];
							break;
						case '/':
							a[i] = +a[i - 2] / +a[i - 1];
							break;
					}
					a.splice(i - 2, 2);
					i = i - 1;
					l = l - 2;
				} else {
					i = i + 1;
				}
			}
			return a[a.length - 1];

		} catch (e) {
			return e;
		}
	}
};
//(1+2)/3*4 -> 12+3/4*
console.log(src.main('12+3/4*'));
console.log(src.main2('12+3/4*'));

module.exports = src;
