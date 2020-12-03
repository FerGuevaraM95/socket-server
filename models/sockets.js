

class Sockets {

  constructor(io) {

    this.io = io;

    this.socketsEvents();
  }

  socketsEvents() {
    // On conection
    this.io.on('connection', (socket) => {

      // Escuchar evento message-to-server
      socket.on('message-to-server', (data) => {
        console.log({data});
        this.io.emit('message-to-server', data)
      });
    
    });
    
    
  }

};

module.exports = Sockets;