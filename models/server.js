// Servidor de express
const express = require('express');
const http = require('http')
const path = require('path');
const socketio = require('socket.io');

class Server {
  constructor() {

    this.app = express();
    this.port = 8080;

    // HTTP server
    this.server = http.createServer(this.app);

    // Configuración de sockets
    this.io = socketio(this.server, { /* config */ });

  }

  middlewares() {
    // Desplegar el directorio público
    this.app.use(express.static(path.resolve(__dirname + '/public')))
  }

  configSockets() {

  }

  execute() {

    // Inicializar middlewares
    this.middlewares();

    // Inicializar sockets
    this.configSockets();

    // Inicializar server
    this.server.listen(this.port, () => {
      console.log('servidor corriendo en el puerto ', this.port);
    });
  }
}

module.exports = Server;