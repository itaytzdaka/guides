
//if development, load .env file
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

//npm i  express
const express = require("express"); // get express to create the server
const server = express(); // create the server

// Support JSON in the requests, let us use "req.body".
server.use(express.json());

//npm i cors
const cors = require("cors");
server.use(cors());

//use a controller
const usersController=require("./controllers/users-controller");
server.use("/api/users", usersController); //add router to server
server.use("/api/*", (request, response) => response.sendStatus(404)); // On any other route - return 404 error.

//define the port
const port = process.env.PORT || 3000;
server.listen(port, () => console.log("Listening on port "+ port)); // the server listening to requests now
