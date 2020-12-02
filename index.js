// Servidor de express
const express = require('express');
const app = express();

// Servidor de sockets
const server = require('http').createServer(app);

// Configuración del socket server
const io = require('socket.io')(server);

// Desplegar el directorio público
app.use(express.static(__dirname + '/public'))

io.on('connection', (socket) => {
  
  socket.emit('mensaje-bienvendida', {
    msg: "bienvenido al server",
    date: new Date()
  });

  socket.on('mensaje-cliente', (data) => {
    console.log(data);
  });

});


server.listen(8080, () => {
  console.log('servidor corriendo en el puerto :8080');
});