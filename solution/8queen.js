var src = {
	/**
	 * @int n=128 : Scale 
	 * @int m=8 : Num of Queen
	 */
	main: function (n, m) {
		const N = n ** 2;
		const q = new Array(m);
		try {
			if (n + 2 >= (N - 1) / (m - 1)) throw 'This problem cannot resolve in this condition.';

			for (var q1 = 1; q1 <= N; q1++) {
				interval: for (var i = n + 2; i < (N - 1) / (m - 1); i++) {
					for (var j = 0; j < m; j++) {
						q[j] = q1 + i * j;
					}
					var res = false;
					for (var k = 0; k < m; k++) {
						for (var l = 0; l < m; l++) {
							if (k === l) continue;
							if ((q[k] - q[l]) % n !== 0 && (q[k] - q[l]) % (n - 1) !== 0 && (q[k] - q[l]) % (n + 1) !== 0) {
								res = true;
							} else {
								continue interval;
							}
						}
					}
					if (res) throw q;
				}
			}
			throw false;

		} catch (d) {
			if (d instanceof Array) {
				return d.map(e => e % m === 0 ? [m, e / m] : [e % m, ~~(e / m) + 1]);
			} else {
				return d;
			}
		}
	}
};

module.exports = src;
