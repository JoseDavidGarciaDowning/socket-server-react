

class Sockets {

    constructor( io ) {
        this.io = io;
        this.socketEvents();
        
    }

    socketEvents(){
        // On connection
        this.io.on('connection', ( socket ) => { 
        //    socket.emit('mensaje-bienvenida', 'Bienvenido!');
            // escuchar evento: mensaje-cliente
        socket.on('mensaje-cliente', (data) => {
            console.log(data);
            this.io.emit('message-from-server', data)
        });

        
        });
    }

}



module.exports = Sockets;