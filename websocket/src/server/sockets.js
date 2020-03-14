const socket = require('socket.io');

const messages = [];

const setupWebSockets = (server) => {
  const io = socket(server);

  // const nsp = io.of('/channels');
  io.on('connection', function (socket) {
    socket.on('new message event', function (data) {
      console.log("New message received");
      messages.push(data);
      socket.emit("score update", {messages});
    });

    socket.on('join', function (room) {
      console.log('joined room message');
      socket.join(room);
      socket.emit("connectedToRoom", {message: "joined room one"})
    });

    socket.on('sent room message', function (msg) {
      console.log('sent room message');
      io.to('room1').emit('update', 'room1');
    });
  });
};

export default setupWebSockets;