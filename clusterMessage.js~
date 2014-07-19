var cluster = require ('cluster');
if (cluster.isMaster) {
//分化worker对象
 var coreCount = require('os').cpus().length;
for (var i=1; i<=coreCount; i++) {
var worker = cluster.fork();
worker.send('Hello,Worker!');
worker.on('message',function(message) {
if (message._queryId) return;
console.log(message);
});
}
} else {
process.send('Hello, main process!');
process.on('message', function(message) {
console.log(message);
});
}
