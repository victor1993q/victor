$(window).load(function(){
var prompt = new $.Deferred();
$('#playGame').focus().on('keypress', function(e) {
  var Y = 121, N = 110;
  if (e.keyCode === Y) {
    prompt.resolve(); 
  } else if (e.keyCode === N) {
    prompt.reject();
  } else {
    return false;  // they must choose!
  }
});
prompt.done(function(){ console.log('Starting game...'); });
prompt.fail(function(){ console.log('No game today.'); });
});  

