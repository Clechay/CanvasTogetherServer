var io = require('socket.io')(8008);

io.on('connection', function (socket) {
  socket.on('draw',(data)=>{
    io.emit('draw',data)
  });
});