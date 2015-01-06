#co-pause

##Description
`co-pause` is a node module to defer generators until an event is fired. You create a `queue` that takes all of your `pause` calls and supplies a `go` function to resume them again. Yielding `pause` will return the value passed into `go` when it is called. If `go` has already called, yielding `pause` will return the value given to `go` immediately and continue.

Be warned: You can only call `go` once. 

##Example
This code waits until the timeout has fired to resume its execution and then prints `Done`.

```js
  var co = require('co');
  var queue = require('co-pause')();
  var go = queue.go;
  var pause = queue.pause;
  
  co(function*() {
  	console.log('Starting');
  	var a = yield pause();
  	console.log(a);
  }).catch(console.log);
  
  setTimeout(function() {
    go('Done');
  }, 5*1000);
```
