var cluster = require('cluster');
var http = require ('http');

var calculationCache = {},
    calculationCallbacks = {};
    mathworker = new worker('calculator.js');

mathWorker.addEventListener('message', function(e) {
var message = e.date;
calculationCache[message.formula] = message.result;
calculationCallbacks[message.formula](message.result);
});
