let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);
let port = 9091;

app.get('/',(request,response) => {
    response.sendFile(__dirname+'/index.html');
});

io.on("connection",(socket) => {
    socket.on("message",(data) => {
        io.sockets.emit('publish',data);
    });
})
http.listen(port, () => console.log(`Server running at port ${port}`));