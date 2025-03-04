//npm i  express
const express = require("express"); // get express to create the server
const server = express(); // create the server


//define the port
const port = process.env.PORT || 3000;
server.listen(port, () => console.log("Listening on port "+ port)); // the server listening to requests now
