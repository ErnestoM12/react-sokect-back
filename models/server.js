// Express server
const express = require("express");
// Socket server
const http = require("http");
const socketIo = require("socket.io");
const path = require("path");
const Sockets = require("./sockets");
const cors = require('cors')

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //Http server
        this.server = http.createServer(this.app);

        //config sockect server
        this.io = socketIo(this.server);

        //Middleware
        this.middlewares();
        // sockect
        this.socketConfig();
    }
    middlewares() {
        //body read and  parse
        this.app.use(express.json());
        //display public directory
        this.app.use(express.static(path.resolve(__dirname, "../public")));
        //CORS
        this.app.use(cors());
    }

    socketConfig() {
        new Sockets(this.io);
    }

    execute() {
        this.server.listen(this.port, () => {
            console.log(`app listening at http://localhost:${this.port}`);
        });
    }
}

module.exports = Server;
