//Express server
const express = require('express');
const app = express('express');
//Socket server 
const server = require('http').createServer(app);

//config sockect server
const io = require('socket.io')(server);

//display public directory
app.use(express.static(__dirname + '/public'))

io.on('connection', (socket) => {






    // send menssage
    // socket.emit('msj-welcome', {
    //     msg: "Welcome to server",
    //     date: new Date()
    // })

    // receive message
    socket.on("msg-to-server", (data) => {
        console.log(data);

        io.emit('msg-from-server', data)

    })
});


server.listen(8000, () => {
    console.log('run server on port:8000');
});