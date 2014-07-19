// application.js
function runCalculation(formula, callback) {
if (formula in calculationCache) {
return callback(calculationCache[formula]);
};
if (formula in calculationCallbacks) {
return setTimeout (function() {
runCalculation(formula, callback);
},0);
};
mathWorker.postMessage(formula);
calculationCallbacks[formula] = callback;
}
