//npm i  express
const express = require("express"); // get express to create the server
const server = express(); // create the server

//npm i express-session
const session = require("express-session");

//define the session
server.use(session({ //use sessions on server
    name: "SessionCookieName", // Name of the Cookie
    secret: "CuteKittens", // Encryption key for the session id
    resave: true, // Start counting session time on each request.
    saveUninitialized: false // Don't create request.session automatically.
}));

//npm i cors
const cors = require("cors");
server.use(cors({
    origin: "http://localhost:3001", // Allow requests from this origin
    credentials: true //Allow the client pass cookies to server, client must add "withCredentials: true" to any http request.
}));


//define the port
const port = process.env.PORT || 3000;
server.listen(port, () => console.log("Listening on port "+ port)); // the server listening to requests now
