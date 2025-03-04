//npm i  express
const express = require("express"); // get express to create the server
const server = express(); // create the server

//define the port
const port = process.env.PORT || 3000;
const listener =server.listen(port, () => console.log("Listening on port "+ port)); // the server listening to requests now

//npm socket.io
const socketIO = require("socket.io");
global.socketServer = socketIO(listener);


socketServer.sockets.on("connection", socket => {
    console.log("Client has been connected.");

    // Listen to client message: 
    socket.on("message-from-client", (message) => {

        // Send that message to all clients: 
        socketServer.sockets.emit("message-from-server", message);
    });

    // Listen to client disconnect: 
    socket.on("disconnect", () => {
        console.log("Client has been disconnected.");
    });
});