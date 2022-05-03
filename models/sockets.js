class Sockets {
    constructor(io) {
        this.io = io;
        this.sockectEvents();
    }
    sockectEvents() {
        // On Connection
        this.io.on("connection", (socket) => {
            //receive message
            socket.on("msg-to-server", (data) => {
                console.log(data);
                //send message
                this.io.emit("msg-from-server", data);
            });
        });
    }
}

module.exports = Sockets;
