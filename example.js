var co = require('co');
var queue = require('./index')();

co(function*() {
	console.log('Starting');
	var a = yield queue.pause();
	console.log(a);
}).catch(console.log);

setInterval(function() {
	queue.go('Done');
}, 5*1000);