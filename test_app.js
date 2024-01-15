var express = require('express');
var app = express();
app.get('/*', function (req, res) {
	  res.send('¡Estoy andando!, node version: ' + process.versions.node + ' , ruta pedida: ' + req.url + ', NODE_ENV: ' + process.env.NODE_ENV);
});
app.listen(3000, function () {
	  console.log('Aplicación de pruebas escuchando en el puerto 3000!');
});
