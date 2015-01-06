var co = require('co');
var queue = require('./index')();
var go = queue.go;
var pause = queue.pause;

co(function*() {
	console.log('Starting');
	var a = yield pause();
	console.log(a);
}).catch(console.log);

setInterval(function() {
	go('Done');
}, 5*1000);