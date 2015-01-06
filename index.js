module.exports = function() {
	var done = false;
	var queue = [];
	var value;

	return {
		pause: function() {
			return function(callback) {
				if(done) {
					callback(value);
				} else {
					queue.push(callback);
				}
			};
		},
		go: function(v) {
			if(!done) {
				value = v;
				for(var i = queue.length - 1; i >= 0; i--) {
					queue[i](value);
				}
				done = true;
			} else {
				throw new Error('You can only call "go" once per queue');
			}
		},
		done: function() {
			return done;
		}
	};
};