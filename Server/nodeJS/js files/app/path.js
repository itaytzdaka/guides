//npm i  express
const express = require("express"); // get express to create the server
const server = express(); // create the server

//npm i path
const path = require("path");

//serve static files from front-end folder, like index.html and front-end/pictures folder
server.use(express.static(path.join(__dirname, "./_front-end")));  //serve "/_front-end" folder as a root "/" route.

//serve index.html for any other route
server.use("*", (request, response) => {
    response.sendFile(path.join(__dirname, "./_front-end/index.html"));
});

//define the port
const port = process.env.PORT || 3000;
server.listen(port, () => console.log("Listening on port "+ port)); // the server listening to requests now
