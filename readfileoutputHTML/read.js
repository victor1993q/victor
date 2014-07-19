var http= require('http'),
    fs= require ('fs');
var server = http.createServer(function (request,response) {
response.writeHead(200,{"Content-Type": "text/html;charset:utf-8"});
fs.readFile('test.txt',function(err,data) {
if (err){
return console.log(err);};
response.write(
	'<!doctype html>'+
	'<html>'+
	'<head>'+
	'<meta charset="utf-8"/>'+
	'<title>read</title>'+
	'</head>'+
	'<body>'+
	'<p>'+
	data.toString('utf8')+
	'</p>'+
	'</body>'+
	'</html>'
	);
response.end();
});
});
server.listen(8000);
