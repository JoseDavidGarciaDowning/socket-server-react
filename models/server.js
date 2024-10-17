const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');

const Sockets = require('./sockets');


class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;


        //http server
        this.server = http.createServer(this.app);

        //configuraciones de sockets
        this.io = socketio(this.server, {/* configuraciones */});
    }
    middlewares() {
        this.app.use(express.static(path.resolve(__dirname, '../public')));
    }
    socketsConfig() {
        new Sockets(this.io);
    }
    execute() {
        //inicializar middlewares
        this.middlewares();

        //nicializar sockets
        this.socketsConfig();

        //inciializar server
        this.server.listen(this.port, () => {
            console.log(`escuchando en http://localhost:${this.port}`);
        });
    }
}


module.exports = Server;