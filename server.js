
var express 		= require('express'); 						//сервер

var app 			= express(); 								//создаём Express-приложение
var ports			= 8080;

var css='/dist/asferro';
var img='/dist/asferro';
var js='/dist/asferro';


var index='./dist/asferro/index.html';

app.use("/", express.static(__dirname + css));

app.get('/', function(req, res) {		
	res.sendfile(index);
});

app.listen(ports, () => {										// запускаем сервер на порту 80
  console.log('We are live on ' + ports);						// отправляем сообщение
});

//--------------------------------------------------------------------------------------------------









                